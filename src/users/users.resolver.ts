import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType, UserTokenType } from './dto/user.dto';
import { UserInput } from './input/user.input';
import { User, userToken } from './interface/user.interface';
import { loginInput } from './input/login.input';

@Resolver()
export class UserResolver{
    constructor(private readonly userservice: UserService){}

    @Query(()=>String)
    async getData(): Promise<String>{
        return "Hello";
    }

    @Mutation(() =>UserType)
    async create(@Args('input') input: UserInput): Promise<User>{
        return await this.userservice.signup(input);
    }
    @Mutation(()=> UserTokenType)
    async login(@Args('input') input: loginInput): Promise<userToken>{
        return await this.userservice.login(input);
    }

}