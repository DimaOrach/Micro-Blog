import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment as CommentEntity } from './comment.schema';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(
    @Body() createCommentDto: { postId: string; userId: string; content: string }
  ): Promise<CommentEntity> {
    const { postId, userId, content } = createCommentDto;
    return this.commentsService.createComment(postId, userId, content);
  }

  @Get(':postId')
  async findAll(@Param('postId') postId: string): Promise<CommentEntity[]> {
    return this.commentsService.getCommentsByPost(postId);
  }

  @Delete(':commentId')
  async delete(@Param('commentId') commentId: string): Promise<void> {
    return this.commentsService.deleteComment(commentId);
  }
}
