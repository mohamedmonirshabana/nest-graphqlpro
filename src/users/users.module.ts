import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from './schema/user.schema';
import { UserService } from './user.service';
import { UserResolver } from './users.resolver';
import  { User_Model_Name } from '../common/constants';
import { PasswordHasherService } from '../auth/password-hasher/password-hasher.service'
import { jwtConstants } from '../common/jwt.constants';
import { JwtModule } from '@nestjs/jwt';
// import { JwtStrategyService } from '../auth/jwt-strategy/jwt-strategy.service';
// import { AuthGuard } from 'src/auth/jwt-strategy/auth.guard';
// import { GqlAuthGuard } from 'src/auth/jwt-strategy/GqlAuthGuard';
@Module({
    imports:[
        MongooseModule.forFeature([{name: User_Model_Name  , schema: UserSchema }]),
        JwtModule.register({secret: jwtConstants.scret})
        
    ],
    providers:[ UserService, UserResolver, PasswordHasherService ],
})
export class UserModule{}