import * as mongoose from 'mongoose';

export const profileSchema = new mongoose.Schema({
    // userID:{
    //     type:String
    // },
    photo:{
        type:String
    }
});