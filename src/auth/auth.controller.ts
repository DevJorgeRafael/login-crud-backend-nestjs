import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() body) {
        return this.authService.login(body.username, body.password);
    }

    @Post('register')
    async register(@Body() user: User) {
        return this.authService.register(user);
    }
}
