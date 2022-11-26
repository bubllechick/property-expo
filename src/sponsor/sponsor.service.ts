import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { FileService } from 'src/file/file.service';
import { Repository } from 'typeorm';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { Sponsor } from './entities/sponsor.entity';

@Injectable()
export class SponsorService {
  constructor(
    @InjectRepository(Sponsor) private sponsorRepo: Repository<Sponsor>,
    private fileService: FileService
  ) { }
  async create(dto: CreateSponsorDto) {
    if (dto.img)
    await this.fileService
      .uploadImage(dto.img, 'sponsor')
      .then(({ hashedFileName: imageName }) => {
        dto.img = imageName;
      })
      .catch((err) => {
        throw new BadRequestException('Error Upload Image');
      });
    return await this.sponsorRepo.save({
      title: dto.title,
      img: dto.img,
      user: dto.user
    });
  }

  async findAll() {
    return await this.sponsorRepo.find();
  }

  async findOne(id: string) {
    return await this.sponsorRepo.findOne(id);
  }

  async update(id: string, dto: UpdateSponsorDto) {
    id = dto.id
    const data = await this.sponsorRepo.findOne(id);
    if (data.img === dto.img) {
      dto.img = data.img;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data.img, 'sponsor');
      if (dto.img)
        await this.fileService
          .uploadImage(dto.img, 'sponsor')
          .then(({ hashedFileName: imageName }) => {
            dto.img = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }
    return await this.sponsorRepo.save({
      id: dto.id,
      title: dto.title,
      img: dto.img,
      user: dto.user
    })
  }

  async remove(id: string) {
    const data = await this.sponsorRepo.findOne(id);
    if (data) {
      return await this.sponsorRepo.remove(data);
    } else {
      throw new BadRequestException({ message: "data tidak ada" });
    }
  }
}
