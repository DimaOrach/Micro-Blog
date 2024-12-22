import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './post.schema';

@Injectable()
export class PostsService {

    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

    async createPost(title: string, content: string): Promise <Post> {
        const newPost = new this.postModel({title, content});
        return newPost.save();
    }

    async getPost(): Promise <Post[]> {
        return this.postModel.find().exec();
    }

}
