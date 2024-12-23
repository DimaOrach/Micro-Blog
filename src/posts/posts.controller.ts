import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.schema';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    async create(@Body() createPostDto: { 
        title: string; content: string; author: string, category: string
    }): Promise<PostEntity> {
        const { title, content, author, category } = createPostDto;
        return this.postsService.createPost(title, content, author, category);
    }

    @Get()
    async findAll(): Promise<PostEntity[]> {
        return this.postsService.getPosts();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<PostEntity> {
        return this.postsService.getPostById(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updatePostDto: { title: string; content: string; author: string },
    ): Promise<PostEntity> {
        const { title, content, author } = updatePostDto;
        return this.postsService.updatePost(id, title, content, author);
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Body('author') author: string): Promise<void> {
        return this.postsService.deletePost(id, author);
    }

    @Post(':id/like')
    async like(@Param('id') id: string, @Body('userId') userId: string): Promise<PostEntity> {
        return this.postsService.likePost(id, userId);
    }

    @Post(':id/unlike')
    async unlike(@Param('id') id: string, @Body('userId') userId: string): Promise<PostEntity> {
        return this.postsService.unlikePost(id, userId);
    }

    @Get('/category/:category')
    async getPostsByCategory(@Param('category') category: string) {
    return this.postsService.getPostsByCategory(category);
  }
}
