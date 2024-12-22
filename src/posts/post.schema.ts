import { Schema } from "mongoose";


export const PostSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

export interface Post extends Document {
    id: string;
    title: string;
    constent: string;
    createdAt: Date;
}