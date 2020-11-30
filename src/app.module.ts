import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ 
    GraphQLModule.forRoot({
    autoSchemaFile: true
  }),
    MongooseModule.forRoot('mongodb://localhost/onlineBookStore'),
 ],
  controllers: [],
  providers: [],
})
export class AppModule {}
