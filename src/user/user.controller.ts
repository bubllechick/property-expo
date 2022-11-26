import { Controller, Get, Post, Body, Patch, Param, Delete, Put, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Account')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // Register all user
  @Post('/user')
  async create(@Body() dto: CreateUserDto) {
    const cek = await this.userService.findNoHp(dto.no_telp);
    if (cek) {
      throw new BadRequestException({ message: 'no sudah digunakan' });
    } else {
      return this.userService.create(dto);
    }
  }
  @Put('user/:id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @Post('/mitra')
  async createMitra(@Body() dto: CreateUserDto) {
    const cek = await this.userService.findNoHp(dto.no_telp);
    if (cek) {
      throw new BadRequestException({ message: 'no sudah digunakan' });
    } else {
      return this.userService.createMitra(dto);
    }
  }
  @Put('mitra/:id')
  updatemitra(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateMitra(id, dto);
  }

  @Post('/jasa')
  async createJasa(@Body() dto: CreateUserDto) {
    const cek = await this.userService.findNoHp(dto.no_telp);
    if (cek) {
      throw new BadRequestException({ message: 'no sudah digunakan' });
    } else {
      return this.userService.createJasa(dto);
    }
  }
  @Put('jasa/:id')
  updatejasa(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateJasa(id, dto);
  }

  @Post('/kontraktor')
  async createKontraktor(@Body() dto: CreateUserDto) {
    const cek = await this.userService.findNoHp(dto.no_telp);
    if (cek) {
      throw new BadRequestException({ message: 'no sudah digunakan' });
    } else {
      return this.userService.createKontraktor(dto);
    }
  }
  @Put('kontraktor/:id')
  updatekontraktor(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateKontraktor(id, dto);
  }

  @Post('/property')
  async createProperty(@Body() dto: CreateUserDto) {
    const cek = await this.userService.findNoHp(dto.no_telp);
    if (cek) {
      throw new BadRequestException({ message: 'no sudah digunakan' });
    } else {
      return this.userService.createProperty(dto);
    }
  }
  @Put('property/:id')
  updateproperty(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateProperty(id, dto);
  }

  @Get('home')
  getHome() {
    return this.userService.home();
  }

  @Get('all-home')
  getAllHome() {
    return this.userService.getAllhome();
  }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
