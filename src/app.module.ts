import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule  } from './core/core.module';
import { UserModule } from './users/users.module';
import { Upload } from './Scalars/upload.scalars';
@Module({
  imports: [ 
    GraphQLModule.forRoot({
    autoSchemaFile: true,
    context:({req}) => ({headers: req.headers}),
    uploads:{
      maxFieldSize:20000000,
      maxFiles: 1
    }
  }),
    MongooseModule.forRoot('mongodb://localhost/onlineBookStore'),
    UserModule
 ],
  controllers: [],
  providers: [],
})
export class AppModule {}
