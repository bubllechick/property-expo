import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { JasaService } from './jasa.service';
import { CreateJasaDto } from './dto/create-jasa.dto';
import { UpdateJasaDto } from './dto/update-jasa.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';

@ApiTags('jasa')
@Controller('jasa')
export class JasaController {
  constructor(private readonly jasaService: JasaService) { }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: CreateJasaDto })
  create(@InjectUser() dto: CreateJasaDto) {
    return this.jasaService.create(dto);
  }

  @Get('get-all')
  findAll() {
    return this.jasaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jasaService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: UpdateJasaDto })
  update(@Param('id') id: string, @InjectUser() dto: UpdateJasaDto) {
    return this.jasaService.update(id, dto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.jasaService.remove(id);
  }

  @Put(':search')
  async search(@Param('search') search: string) {
    return await this.jasaService.findSearch(search);
  }
}
