import { Document } from 'mongoose';

export interface Profile extends Document{
    // userID:string;
    photo:string;
}