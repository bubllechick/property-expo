import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('event')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: CreateEventDto })
  create(@InjectUser() dto: CreateEventDto) {
    return this.eventService.create(dto);
  }


  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: UpdateEventDto })
  update(@Param('id') id: string, @InjectUser() dto: UpdateEventDto) {
    return this.eventService.update(id, dto);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
