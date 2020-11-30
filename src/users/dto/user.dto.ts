import { ObjectType, Field, ID } from '@nestjs/graphql';


@ObjectType()
export class UserType{
    @Field(type => ID)
    id: string;
    @Field()
    fullname: string;
    @Field()
    email: string;
    @Field()
    password: string;
}

@ObjectType()
export class UserTokenType{
    @Field()
    token: string;
}