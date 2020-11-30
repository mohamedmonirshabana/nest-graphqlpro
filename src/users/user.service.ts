import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import { UserInput } from './input/user.input';
import { User_Model_Name } from '../common/constants';
import { UserType } from './dto/user.dto';

@Injectable()
export class UserService{
    constructor(@InjectModel(User_Model_Name) private readonly userModel: Model<User> ){}

    async signup(userdto: UserInput):Promise<User> {
        return await this.userModel.create(userdto);
    }
}