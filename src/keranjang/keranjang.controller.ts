import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { KeranjangService } from './keranjang.service';
import { CreateJasaFavDto, CreateKeranjangDto } from './dto/create-keranjang.dto';
import { UpdateJasaFavDto, UpdateKeranjangDto } from './dto/update-keranjang.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('favorite')
@Controller('fovorite')
export class KeranjangController {
  constructor(private readonly keranjangService: KeranjangService) {}

  @Post('jasa')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({type: CreateJasaFavDto})
  createjasa(@InjectUser() dto: CreateJasaFavDto) {
    return this.keranjangService.createJF(dto);
  }
  @Delete('delete-jasa/:id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  removejasa(@Param('id') id: string) {
    return this.keranjangService.removejasa(id);
  }

  @Post('property')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({type: CreateKeranjangDto})
  createproperty(@InjectUser() dto: CreateKeranjangDto) {
    return this.keranjangService.createJP(dto);
  }
  @Delete('delete-property/:id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  removeproperty(@Param('id') id: string) {
    return this.keranjangService.removeproperty(id);
  }


  @Get('get-all-fav')
  findAll() {
    return this.keranjangService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.keranjangService.findOne(id);
  // }

  // @Patch('favorite-property/:id')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  // @ApiBody({type: UpdateKeranjangDto})
  // updateProFav(@Param('id') id: string, @InjectUser() dto: UpdateKeranjangDto) {
  //   return this.keranjangService.updateProFav(id, dto);
  // }

  // @Patch('favorite-jasa/:id')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  // @ApiBody({type: UpdateJasaFavDto})
  // updateJaFav(@Param('id') id: string, @InjectUser() dto: UpdateJasaFavDto) {
  //   return this.keranjangService.updateJaFav(id, dto);
  // }

 

}
