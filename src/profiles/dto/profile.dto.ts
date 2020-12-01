import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ProfileType{
    @Field(type => ID)
    id: string;
    @Field()
    photo:string;
}