import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule  } from './core/core.module';
import { UserModule } from './users/users.module';
@Module({
  imports: [ 
    GraphQLModule.forRoot({
    autoSchemaFile: true
  }),
    MongooseModule.forRoot('mongodb://localhost/onlineBookStore'),
    UserModule
 ],
  controllers: [],
  providers: [],
})
export class AppModule {}
