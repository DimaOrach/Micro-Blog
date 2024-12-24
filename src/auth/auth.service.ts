import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/user.schema';

@Injectable()
export class AuthService {
  jwtService: any;
  constructor(private readonly usersService: UsersService) {}

  async register(username: string, password: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password:', hashedPassword);
    return this.usersService.createUser(username, hashedPassword);
}

async login(username: string, password: string): Promise<User> {
    const user = await this.usersService.findUserByUsername(username);
    console.log('User from DB:', user);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        console.log('Passwords do not match');
        throw new UnauthorizedException('Invalid credentials');
    }
    console.log('Password match successful');
    return user;
}


}
