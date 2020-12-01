import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('profileUploaded')
export class profileUploaded{
    @Field()
    sucess: true;
}