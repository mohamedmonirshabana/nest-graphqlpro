import { Resolver,Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType, UserTokenType } from './dto/user.dto';
import { UserInput } from './input/user.input';
import { User, userToken } from './interface/user.interface';
import { loginInput } from './input/login.input';
import { UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { AuthGuard } from '../auth/auth.guard';
import { GqlAuthGuard } from 'src/auth/jwt-strategy/GqlAuthGuard';
@Resolver()
export class UserResolver{
    constructor(private readonly userservice: UserService){}

    @Query(()=>String)
    @UseGuards(new AuthGuard)
    async getData(@Context('user')user: UserType):Promise<String>{
        return "Hello";
    }

    @Mutation(() =>UserType)
    async signup(@Args('input') input: UserInput): Promise<User>{
        return await this.userservice.signup(input);
    }
    @Mutation(()=> UserTokenType)
    async login(@Args('input') input: loginInput): Promise<userToken>{
        return await this.userservice.login(input);
    }



}