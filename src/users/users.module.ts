import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from './schema/user.schema';
import { UserService } from './user.service';
import { UserResolver } from './users.resolver';
import  { User_Model_Name } from '../common/constants';
@Module({
    imports:[
        MongooseModule.forFeature([{name: User_Model_Name  , schema: UserSchema }])
    ],
    providers:[ UserService, UserResolver ],
})
export class UserModule{}