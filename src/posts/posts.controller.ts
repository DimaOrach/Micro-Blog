import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.schema';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    // Створення поста
    @Post()
    async create(@Body() createPostDto: { title: string; content: string; author: string }): Promise<PostEntity> {
        const { title, content, author } = createPostDto;
        return this.postsService.createPost(title, content, author);
    }

    // Отримання всіх постів
    @Get()
    async findAll(): Promise<PostEntity[]> {
        return this.postsService.getPosts();
    }

    // Отримання поста за ID
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<PostEntity> {
        return this.postsService.getPostById(id);
    }

    // Оновлення поста
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updatePostDto: { title: string; content: string; author: string },
    ): Promise<PostEntity> {
        const { title, content, author } = updatePostDto;
        return this.postsService.updatePost(id, title, content, author);
    }

    // Видалення поста
    @Delete(':id')
    async delete(@Param('id') id: string, @Body('author') author: string): Promise<void> {
        return this.postsService.deletePost(id, author);
    }

    // Лайк поста
    @Post(':id/like')
    async like(@Param('id') id: string, @Body('userId') userId: string): Promise<PostEntity> {
        return this.postsService.likePost(id, userId);
    }

    // Анлайк поста
    @Post(':id/unlike')
    async unlike(@Param('id') id: string, @Body('userId') userId: string): Promise<PostEntity> {
        return this.postsService.unlikePost(id, userId);
    }
}
