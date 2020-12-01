import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from './interface/profile.interface';
import { uploadUserProfilePhoto } from './input/profile.input';
import { User_Model_Name } from '../common/constants';
import { ProfileType } from './dto/profile.dto';


@Injectable()
export class ProfileService{
    constructor(
        @InjectModel(User_Model_Name)private readonly profileModel: Model<Profile>,
    ){}

    
}