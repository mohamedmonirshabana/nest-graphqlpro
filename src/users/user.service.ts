import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, userToken } from './interface/user.interface';
import { UserInput } from './input/user.input';
import { User_Model_Name } from '../common/constants';
import { UserType } from './dto/user.dto';
import { PasswordHasherService } from '../auth/password-hasher/password-hasher.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService{
    constructor(
        @InjectModel(User_Model_Name) 
        private readonly userModel:Model<User>,
        private hasherService: PasswordHasherService ,
        private jwtService: JwtService
        ){}

    async signup(userdto: UserInput):Promise<userToken> {
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
         await userdata.save();
        const token = await this.jwtService.signAsync({
            email: userdata.email,
            id: userdata._id
        },
        {
            expiresIn: '1d'
        }
        );
        return {token: token};
        // return await this.userModel.create(userdto);
    }
}