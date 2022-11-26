import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PengajuanService } from './pengajuan.service';
import { CreatePengajuanDto } from './dto/create-pengajuan.dto';
import { UpdatePengajuanDto } from './dto/update-pengajuan.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('pengajuan')
@Controller('pengajuan')
export class PengajuanController {
  constructor(private readonly pengajuanService: PengajuanService) { }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: CreatePengajuanDto })
  create(@InjectUser() dto: CreatePengajuanDto) {
    return this.pengajuanService.create(dto);
  }

  // @Get()
  // findAll() {
  //   return this.pengajuanService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pengajuanService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: UpdatePengajuanDto })
  update(@InjectUser('id') id: string, @InjectUser() dto: UpdatePengajuanDto) {
    return this.pengajuanService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pengajuanService.remove(id);
  }
}
