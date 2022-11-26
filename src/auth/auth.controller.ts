import { BadRequestException, Request, Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepo: UserService) { }

  @Post()
  async login(@Body() dto: AuthDto) {
    let user = await this.authService.cekUser(dto.no_hp, dto.password);
    if (user) {
      console.log(user.id);
      return this.authService.generateToken({ id: user.id })
    } else {
      throw new BadRequestException({ messages: 'gagal login' })
    }
  }

  @Get('for-user-info')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async cek(@Request() req) {
    console.log(req.user);
    return await req.user
  }
}
