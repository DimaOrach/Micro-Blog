import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string }) {
    const { username, password } = body;

    if (!username || !password) {
      throw new BadRequestException('Username and password are required');
    }

    const existingUser = await this.usersService.findUserByUsername(username);
    if (existingUser) {
      throw new BadRequestException('Username already exists');
    }

    return this.usersService.createUser(username, password);
  }

  @Get()
  async findAll() {
    return this.usersService.findAllUsers();
  }
}
