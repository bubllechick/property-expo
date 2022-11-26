import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, SetMetadata } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto, CreateTanahDto, UpdateTanahDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { JwtGuard } from 'src/auth/jwt.guard';
import { RolesGuard } from 'src/auth/role.guard';
import { Roles } from 'src/etc/decorator/role.decorator';
import { Role } from 'src/etc/decorator/role.enum';

@ApiTags('property')
@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  // @Post('/property')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard, RolesGuard)
  // @Roles(Role.USER)
  // @ApiBody({type: CreatePropertyDto})
  // create(@InjectUser() dto: CreatePropertyDto) {
  //   return this.propertyService.create(dto);
  // }

  @Post('/property')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({type: CreatePropertyDto})
  create(@InjectUser() dto: CreatePropertyDto) {
    return this.propertyService.create(dto);
  }

  @Put('property/:id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({type: UpdatePropertyDto})
  update(@Param('id') id: string, @InjectUser() dto: UpdatePropertyDto) {
    return this.propertyService.update(id, dto);
  }

  @Post('/lahan-tanah')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({type: CreateTanahDto})
  createTanah(@InjectUser() dto: CreateTanahDto) {
    return this.propertyService.createTanah(dto);
  }

  @Put('lahan-tanah/:id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({type: UpdateTanahDto})
  updateTanah(@Param('id') id: string, @InjectUser() dto: UpdateTanahDto) {
    return this.propertyService.updateTanah(id,dto);
  }

  @Get('get-all')
  findAll() {
    return this.propertyService.findAll();
  }
  
  @Get('lahan')
  findAllLahan() {
    return this.propertyService.findAllLahan();
  }

  @Get('apartement')
  findAllApartement() {
    return this.propertyService.findAllApartement();
  }
  @Get('rumah')
  findAllRumah() {
    return this.propertyService.findAllRumah();
  }
  @Get('ruko')
  findAllRuko() {
    return this.propertyService.findAllRuko();
  }

  @Get('gudang')
  findAllGudang() {
    return this.propertyService.findAllGudang();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(id);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.propertyService.remove(id);
  }

  @Put(':search')
  async search(@Param('search') search: string) {
    return await this.propertyService.findSearch(search);
  }
}
