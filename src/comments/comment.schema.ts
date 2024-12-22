import { Schema, Document } from 'mongoose';

export const CommentSchema = new Schema({
  content: { type: String, required: true },
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

export interface Comment extends Document {
  id: string;
  content: string;
  postId: string;
  userId: string;
  createdAt: Date;
}
