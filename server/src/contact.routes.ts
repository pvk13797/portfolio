import * as express from 'express';
import * as mongodb from 'mongodb';
import { collections } from './database';

export const contactRouter = express.Router();
contactRouter.use(express.json());

contactRouter.post("/", async (req, res) => {
    try{
        const contact = req.body;
        const result = await collections.contacts.insertOne(contact);

        if (result.acknowledged) {
            res.status(201).send(`Mail send successfully...`);
        } else {
            res.status(500).send('Failed to send mail');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});