import { Resolver,Query,Mutation, Args, Context } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { ProfileType } from './dto/profile.dto';
import { uploadUserProfilePhoto } from './input/profile.input';
import { Profile } from './interface/profile.interface';
import { profileUploaded } from './dto/profile.type';

@Resolver()
export class profileResolver{
    constructor(private readonly profileservice: ProfileService){}

    @Mutation(()=>profileUploaded)
    public async uploadphoto(@Args('profileUploaded'){file}: profileUploaded){
        const fileData = await file;
    }
}