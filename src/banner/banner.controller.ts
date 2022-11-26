import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BannerService } from './banner.service';
import { CreateBannerHomeDownDto } from './dto/banner-home-down.dto';
import { CreateBannerHomeUpDto } from './dto/banner-home-up.dto';
import { CreateBannerJasaDto } from './dto/banner-jasa.dto';
import { CreateBannerPropertyDto } from './dto/banner-property.dto';
import { CreateBedahRumahDto } from './dto/bedah-rumah.dto';

@ApiTags('Banner & Bedah Rumah')
@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post('banner-jasa')
  createBjasa(@Body() dto: CreateBannerJasaDto) {
    return this.bannerService.createBjasa(dto);
  }

  @Post('banner-property')
  createBproperty(@Body() dto: CreateBannerPropertyDto) {
    return this.bannerService.createBproperty(dto);
  }

  @Post('banner-home-up')
  createBhup(@Body() dto: CreateBannerHomeUpDto) {
    return this.bannerService.createBhup(dto);
  }

  @Post('banner-home-down')
  createBhdwn(@Body() dto: CreateBannerHomeDownDto) {
    return this.bannerService.createBhdwn(dto);
  }

  @Post('banner-bedah-rumah')
  createBrmh(@Body() dto: CreateBedahRumahDto) {
    return this.bannerService.createBrmh(dto);
  }
  
  @Get('BannerJasa')
  findAllBannerJasaRepo() {
    return this.bannerService.findAllBannerJasaRepo();
  }
  @Get('BannerProperty')
  findAllBannerPropertyRepo() {
    return this.bannerService.findAllBannerPropertyRepo();
  }
  @Get('BannerHomeUp')
  findAllBannerHomeUpRepo() {
    return this.bannerService.findAllBannerHomeUpRepo();
  }
  @Get('BannerHomeDown')
  findAllBannerHomeDownRepo() {
    return this.bannerService.findAllBannerHomeDownRepo();
  }
  @Get('BedahRumah')
  findAllBedahRumahRepo() {
    return this.bannerService.findAllBedahRumahRepo();
  }

  @Get('BannerJasa/:id')
  findOneBannerJasaRepo(@Param('id') id: string) {
    return this.bannerService.findOneBannerJasaRepo(id);
  }
  @Get('BannerProperty/:id')
  findOneBannerPropertyRepo(@Param('id') id: string) {
    return this.bannerService.findOneBannerPropertyRepo(id);
  }
  @Get('BannerHomeUp/:id')
  findOneBannerHomeUpRepo(@Param('id') id: string) {
    return this.bannerService.findOneBannerHomeUpRepo(id);
  }
  @Get('BannerHomeDown/:id')
  findOneBannerHomeDownRepo(@Param('id') id: string) {
    return this.bannerService.findOneBannerHomeDownRepo(id);
  }
  @Get('BedahRumah/:id')
  findOneBedahRumahRepo(@Param('id') id: string) {
    return this.bannerService.findOneBedahRumahRepo(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBannerDto: UpdateBannerDto) {
  //   return this.bannerService.update(id, updateBannerDto);
  // }

  @Delete('BannerJasa/:id')
  removeBannerJasaRepo(@Param('id') id: string) {
    return this.bannerService.removeBannerJasaRepo(id);
  }
  @Delete('BannerProperty/:id')
  removeBannerPropertyRepo(@Param('id') id: string) {
    return this.bannerService.removeBannerPropertyRepo(id);
  }
  @Delete('BannerHomeUp/:id')
  removeBannerHomeUpRepo(@Param('id') id: string) {
    return this.bannerService.removeBannerHomeUpRepo(id);
  }
  @Delete('BannerHomeDown/:id')
  removeBannerHomeDownRepo(@Param('id') id: string) {
    return this.bannerService.removeBannerHomeDownRepo(id);
  }
  @Delete('BedahRumah/:id')
  removeBedahRumahRepo(@Param('id') id: string) {
    return this.bannerService.removeBedahRumahRepo(id);
  }
}
