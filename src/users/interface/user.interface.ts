import { Document } from 'mongoose';

export interface User extends Document{
    fullname: string;
    email: string;
    password: string;
}