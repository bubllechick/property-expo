import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { FileService } from 'src/file/file.service';
import { Repository } from 'typeorm';
import { CreateBannerHomeDownDto } from './dto/banner-home-down.dto';
import { CreateBannerHomeUpDto } from './dto/banner-home-up.dto';
import { CreateBannerJasaDto } from './dto/banner-jasa.dto';
import { CreateBedahRumahDto } from './dto/bedah-rumah.dto';
import { BannerHomeDown } from './entities/bannerHomeDown.entity';
import { BannerHomeUp } from './entities/bannerHomeUp.entity';
import { BannerJasa } from './entities/bannerJasa.entity';
import { BannerProperty } from './entities/bannerProperty.entity';
import { BedahRumah } from './entities/bedahRumah.entity';

@Injectable()
export class BannerService {

  constructor(
    @InjectRepository(BannerJasa) private BannerJasaRepo: Repository<BannerJasa>,
    @InjectRepository(BannerProperty) private BannerPropertyRepo: Repository<BannerProperty>,
    @InjectRepository(BannerHomeUp) private BannerHomeUpRepo: Repository<BannerHomeUp>,
    @InjectRepository(BannerHomeDown) private BannerHomeDownRepo: Repository<BannerHomeDown>,
    @InjectRepository(BedahRumah) private BedahRumahRepo: Repository<BedahRumah>,
    private fileService: FileService
  ) { }

  async createBjasa(dto: CreateBannerJasaDto) {
    if (dto.img)
      await this.fileService
        .uploadImage(dto.img, 'banner')
        .then(({ hashedFileName: imageName }) => {
          dto.img = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    return this.BannerJasaRepo.save(dto);
  }

  async createBproperty(dto: CreateBannerHomeUpDto) {
    if (dto.img)
      await this.fileService
        .uploadImage(dto.img, 'banner')
        .then(({ hashedFileName: imageName }) => {
          dto.img = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    return this.BannerPropertyRepo.save(dto);
  }

  async createBhup(dto: CreateBannerHomeUpDto) {
    if (dto.img)
      await this.fileService
        .uploadImage(dto.img, 'banner')
        .then(({ hashedFileName: imageName }) => {
          dto.img = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    return this.BannerHomeUpRepo.save(dto);
  }

  async createBhdwn(dto: CreateBannerHomeDownDto) {
    if (dto.img)
      await this.fileService
        .uploadImage(dto.img, 'banner')
        .then(({ hashedFileName: imageName }) => {
          dto.img = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    return this.BannerHomeDownRepo.save(dto);
  }

  async createBrmh(dto: CreateBedahRumahDto) {
    if (dto.img)
      await this.fileService
        .uploadImage(dto.img, 'bedah-rumah')
        .then(({ hashedFileName: imageName }) => {
          dto.img = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    return this.BedahRumahRepo.save(dto);
  }

  async findAllBannerJasaRepo() {
    return await this.BannerJasaRepo.find();
  }
  async findAllBannerPropertyRepo() {
    return await this.BannerPropertyRepo.find();
  }
  async findAllBannerHomeUpRepo() {
    return await this.BannerHomeUpRepo.find();
  }
  async findAllBannerHomeDownRepo() {
    return await this.BannerHomeDownRepo.find();
  }
  async findAllBedahRumahRepo() {
    return await this.BedahRumahRepo.find();
  }

  async findOneBannerJasaRepo(id: string) {
    return await this.BannerJasaRepo.findOne(id);
  }
  async findOneBannerPropertyRepo(id: string) {
    return await this.BannerPropertyRepo.findOne(id);
  }
  async findOneBannerHomeUpRepo(id: string) {
    return await this.BannerHomeUpRepo.findOne(id);
  }
  async findOneBannerHomeDownRepo(id: string) {
    return await this.BannerHomeDownRepo.findOne(id);
  }
  async findOneBedahRumahRepo(id: string) {
    return await this.BedahRumahRepo.findOne(id);
  }

  // update(id: number, updateBannerDto: UpdateBannerDto) {
  //   return `This action updates a #${id} banner`;
  // }

  async removeBannerJasaRepo(id: string) {
    const data = await this.BannerJasaRepo.findOne(id);
    if (data) {
      this.fileService.delete(data.img, 'banner');
      return await this.BannerJasaRepo.remove(data);
    }
  }

  async removeBannerPropertyRepo(id: string) {
    const data = await this.BannerPropertyRepo.findOne(id);
    if (data) {
      this.fileService.delete(data.img, 'banner');
      return await this.BannerPropertyRepo.remove(data);
    }
  }

  async removeBannerHomeUpRepo(id: string) {
    const data = await this.BannerHomeUpRepo.findOne(id);
    if (data) {
      this.fileService.delete(data.img, 'banner');
      return await this.BannerHomeUpRepo.remove(data);
    }
  }

  async removeBannerHomeDownRepo(id: string) {
    const data = await this.BannerHomeDownRepo.findOne(id);
    if (data) {
      this.fileService.delete(data.img, 'banner');
      return await this.BannerHomeDownRepo.remove(data);
    }
  }

  async removeBedahRumahRepo(id: string) {
    const data = await this.BedahRumahRepo.findOne(id);
    if (data) {
      this.fileService.delete(data.img, 'bedah-rumah');
      return await this.BedahRumahRepo.remove(data);
    }
  }
}

// BannerJasaRepo
// BannerPropertyRepo
// BannerHomeUpRepo
// BannerHomeDownRepo
// BedahRumahRepo