import * as mongodb from 'mongodb';

export interface Contact {
    name: string;
    email: string;
    message: string;
    _id?: mongodb.ObjectId;
}