import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Підключення .env файлу
    MongooseModule.forRoot(process.env.MONGO_URI), PostsModule, // Підключення до MongoDB Atlas
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
