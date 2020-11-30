import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './dto/user.dto';
import { UserInput } from './input/user.input';
import { User } from './interface/user.interface';

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
        // return "hello";
    }
}