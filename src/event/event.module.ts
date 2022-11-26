import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Event
    ])
  ],
  controllers: [EventController],
  providers: [EventService, FileService]
})
export class EventModule {}
