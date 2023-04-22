import * as mongodb from "mongodb";
import { Contact } from "./contact";
import { json } from "stream/consumers";

export const collections: {
    contacts?: mongodb.Collection<Contact>;
} = {};

export async function connectToDatabase(uri: string){
    const client = new mongodb.MongoClient(uri);
    await client.connect();

    const db = client.db('portfolio');
    await applySchemaValidation(db);

    const contactCollection = db.collection<Contact>('contact_details');
    collections.contacts = contactCollection;
}

async function applySchemaValidation(db: mongodb.Db){
    const jsonSchema = {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'email', 'message'],
            additionalProperties: false,
            properties: {
                _id: {},
                name: {
                    bsonType: 'string',
                    description: "'name' is required and is a string",
                },
                email: {
                    bsonType: 'string',
                    description: "'email' is required and is a string",
                },
                message: {
                    bsonType: 'string',
                    description: "'message' is required and is a string",
                },
            },
        },
    };

    await db.command({
        collMod: "contact_details",
        validator: jsonSchema
    }).catch(async (error: mongodb.MongoServerError) => {
        if (error.codeName === 'NamespaceNotFound') {
            await db.createCollection('contact_details', {validator: jsonSchema});
        }
    });
}