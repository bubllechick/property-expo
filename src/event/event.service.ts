import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileService } from 'src/file/file.service';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepo: Repository<Event>,
    private fileService: FileService
  ) { }
  async create(dto: CreateEventDto) {
    if (dto.img)
      await this.fileService
        .uploadImage(dto.img, 'event')
        .then(({ hashedFileName: imageName }) => {
          dto.img = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    const data = await this.eventRepo.save({
      title: dto.title,
      img: dto.img,
      start_date: dto.start_date,
      end_date: dto.end_date,
      location: dto.location,
      desc: dto.desc,
      user: dto.user
    });
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'data tidak tersimpan' });
    }
  }

  async update(id: string, dto: UpdateEventDto) {
    dto.id = id
    const data_event = await this.eventRepo.findOne(id);
    if (data_event.img === dto.img) {
      dto.img = data_event.img;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data_event.img, 'event');
      if (dto.img)
        await this.fileService
          .uploadImage(dto.img, 'event')
          .then(({ hashedFileName: imageName }) => {
            dto.img = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }
    const data = await this.eventRepo.save({
      id: dto.id,
      title: dto.title,
      img: dto.img,
      start_date: dto.start_date,
      end_date: dto.end_date,
      location: dto.location,
      desc: dto.desc,
      user: dto.user
    });
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'data tidak tersimpan' });
    }
  }

  async findAll() {
    const data = await this.eventRepo.find({
      relations: ['user']
    });
    // if (data) {
      return data
    // } else {
    //   throw new BadRequestException({ message: 'data tidak ada' });
    // }
  }

  async findOne(id: string) {
    const data = await this.eventRepo.findOne(id);
    // if (data) {
      return data
    // } else {
    //   throw new BadRequestException({ message: 'data tidak ada' })
    // }
  }

  async remove(id: string) {
    const data = await this.eventRepo.findOne(id);
    if (data) {
      return this.eventRepo.remove(data);
    } else {
      throw new BadRequestException({ message: 'data tidak ada' });
    }
  }
}
