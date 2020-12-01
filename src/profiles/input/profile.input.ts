import { Upload } from '../../Scalars/upload.scalars';
import { InputType, Field} from '@nestjs/graphql';

@InputType()
export class uploadUserProfilePhoto{
    // @Field()
    // userID:string;
    @Field()
    photo:Upload;
}