import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import { UserInput } from './input/user.input';
import { User_Model_Name } from '../common/constants';
import { UserType } from './dto/user.dto';
import { PasswordHasherService } from '../auth/password-hasher/password-hasher.service';


@Injectable()
export class UserService{
    constructor(
        @InjectModel(User_Model_Name) 
        private readonly userModel:Model<User>,
        private hasherService: PasswordHasherService ,
        ){}

    async signup(userdto: UserInput):Promise<User> {
        const user = await this.userModel.findOne({email: userdto.email});
        if(user){
            throw new UnauthorizedException('Email is  Exist');
        }
        const encryptPassword = await this.hasherService.hashPassword(userdto.password);
        
        const userdata = new this.userModel({
            fullname: userdto.fullname,
            email: userdto.email,
            password: encryptPassword
        });
        return await userdata.save();
        
        // return await this.userModel.create(userdto);
    }
}