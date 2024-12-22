import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import {Post as PostEntity} from './post.schema';

@Controller('posts')
export class PostsController {

    constructor(private readonly postsService: PostsService) {}

    @Post()
    async create(@Body() createPostDto: {title: string, content: string}): Promise <PostEntity> {
        const {title, content} = createPostDto;
        return this.postsService.createPost(title, content);
    }

    @Get()
    async findAll(): Promise <PostEntity[]> {
        return this.postsService.getPost();
    }

}
