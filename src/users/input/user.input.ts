import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserInput{
    @Field()
    fullname:string;
    @Field()
    email:string;
    @Field()
    password:string;
}