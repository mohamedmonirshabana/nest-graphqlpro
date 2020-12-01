import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class loginInput{
    @Field()
    email:string;
    @Field()
    password:string;
}