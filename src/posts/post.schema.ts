import { Schema, Document } from "mongoose";

export const PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
    likes: { type: [Schema.Types.ObjectId], ref: 'User', default: [] }
});

export interface Post extends Document {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    author: string;
    likes: string[];
}
