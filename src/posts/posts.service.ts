import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './post.schema';

@Injectable()
export class PostsService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

    // Створення поста
    async createPost(title: string, content: string, author: string): Promise<Post> {
        const newPost = new this.postModel({ title, content, author });
        return newPost.save();
    }

    // Отримання всіх постів
    async getPosts(): Promise<Post[]> {
        return this.postModel.find().populate('author', 'username').exec();
    }

    // Отримання поста за ID
    async getPostById(id: string): Promise<Post> {
        const post = await this.postModel.findById(id).populate('author', 'username').exec();
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        return post;
    }

    // Оновлення поста
    async updatePost(id: string, title: string, content: string, author: string): Promise<Post> {
        const post = await this.postModel.findOneAndUpdate(
            { _id: id, author }, // Перевірка, що автор збігається
            { title, content },
            { new: true },
        );
        if (!post) {
            throw new NotFoundException('Post not found or not authorized to update');
        }
        return post;
    }

    // Видалення поста
    async deletePost(id: string, author: string): Promise<void> {
        const result = await this.postModel.deleteOne({ _id: id, author }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Post not found or not authorized to delete');
        }
    }

    // Лайк поста
    async likePost(id: string, userId: string): Promise<Post> {
        const post = await this.postModel.findByIdAndUpdate(
            id,
            { $addToSet: { likes: userId } }, // Додаємо ID користувача, якщо його ще немає
            { new: true },
        );
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        return post;
    }

    // Анлайк поста
    async unlikePost(id: string, userId: string): Promise<Post> {
        const post = await this.postModel.findByIdAndUpdate(
            id,
            { $pull: { likes: userId } }, // Видаляємо ID користувача
            { new: true },
        );
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        return post;
    }
}
