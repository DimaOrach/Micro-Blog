import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Підключення .env файлу
    MongooseModule.forRoot(process.env.MONGO_URI), PostsModule, UsersModule, // Підключення до MongoDB Atlas
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
