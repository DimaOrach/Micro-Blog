import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(process.env.MONGO_URI), PostsModule, UsersModule, CommentsModule,
    PostsModule,
    UsersModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
