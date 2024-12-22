import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './comment.schema';

@Injectable()
export class CommentsService {
  constructor(@InjectModel('Comment') private readonly commentModel: Model<Comment>) {}

  async createComment(postId: string, userId: string, content: string): Promise<Comment> {
    const newComment = new this.commentModel({ postId, userId, content });
    return newComment.save();
  }

  async getCommentsByPost(postId: string): Promise<Comment[]> {
    return this.commentModel.find({ postId }).exec();
  }

  async deleteComment(commentId: string): Promise<void> {
    await this.commentModel.findByIdAndDelete(commentId);
  }
}

