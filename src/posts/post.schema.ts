import { Schema, Document } from "mongoose";

export const PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Зв'язок з User
    likes: { type: [Schema.Types.ObjectId], ref: 'User', default: [] } // Масив ID користувачів
});

export interface Post extends Document {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    author: string; // ID автора
    likes: string[]; // Масив ID лайків
}
