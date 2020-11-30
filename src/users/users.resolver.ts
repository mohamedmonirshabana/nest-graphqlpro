import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType, UserTokenType } from './dto/user.dto';
import { UserInput } from './input/user.input';
import { User, userToken } from './interface/user.interface';

@Resolver()
export class UserResolver{
    constructor(private readonly userservice: UserService){}

    @Query(()=>String)
    async getData(): Promise<String>{
        return "Hello";
    }

    @Mutation(() =>UserTokenType)
    async create(@Args('input') input: UserInput): Promise<userToken>{
        return await this.userservice.signup(input);
        // return "hello";
    }
}