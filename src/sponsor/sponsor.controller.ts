import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SponsorService } from './sponsor.service';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('sponsor')
@Controller('sponsor')
export class SponsorController {
  constructor(private readonly sponsorService: SponsorService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({type: CreateSponsorDto})
  create(@InjectUser() dto: CreateSponsorDto) {
    return this.sponsorService.create(dto);
  }

  @Get()
  findAll() {
    return this.sponsorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sponsorService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({type: UpdateSponsorDto})
  update(@Param('id') id: string, @InjectUser() updateSponsorDto: UpdateSponsorDto) {
    return this.sponsorService.update(id, updateSponsorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sponsorService.remove(id);
  }
}
