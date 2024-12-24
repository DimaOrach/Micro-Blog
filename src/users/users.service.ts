import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(username: string, password: string): Promise<User> {
    const newUser = new this.userModel({ username, password });
    return newUser.save();
  } 

  async findAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findUserByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }).exec();
  }

  findUserById(sub: any) {
    throw new Error('Method not implemented.');
}
}
