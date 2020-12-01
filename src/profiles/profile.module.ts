import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import{ Profile_Model_Name } from '../common/constants';
import { ProfileService } from './profile.service';
import { profileSchema } from './schema/profile.schema';

@Module({
    imports:[
        MongooseModule.forFeature([{name:Profile_Model_Name, schema:profileSchema}])
    ],
    providers:[ ProfileService, ]
})
export class ProfileModule{}