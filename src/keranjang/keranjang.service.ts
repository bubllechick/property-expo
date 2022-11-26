import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateJasaFavDto, CreateKeranjangDto } from './dto/create-keranjang.dto';
import { UpdateJasaFavDto, UpdateKeranjangDto } from './dto/update-keranjang.dto';
import { JasaFav } from './entities/jasa-fav.entity';
import { Keranjang } from './entities/keranjang.entity';

@Injectable()
export class KeranjangService {
  constructor(
    @InjectRepository(Keranjang) private keranjangRepo: Repository<Keranjang>,
    @InjectRepository(JasaFav) private jaFavRepo: Repository<JasaFav>
  ) { }
  async createJP(dto: CreateKeranjangDto) {
    const data = await this.keranjangRepo.save({
      user: dto.user,
      property: { id: dto.property_id }
    });
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'data tidak tersimpan' });
    }
  }
  async updateProFav(id: string, dto: UpdateKeranjangDto) {
    dto.id = id
    const data = await this.keranjangRepo.save({
      id: dto.id,
      user: dto.user,
      property: { id: dto.property_id }
    });
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'data tidak tersimpan' });
    }
  }

  async createJF(dto: CreateJasaFavDto) {
    const data = await this.jaFavRepo.save({
      user: dto.user,
      jasa: { id: dto.jasa_id }
    });
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'data tidak tersimpan' });
    }
  }
  async updateJaFav(id: string, dto: UpdateJasaFavDto) {
    dto.id = id
    const data = await this.jaFavRepo.save({
      id: dto.id,
      user: dto.user,
      jasa: { id: dto.jasa_id }
    });
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'data tidak tersimpan' });
    }
  }

  async findAll() {
    const dataproperty = await this.keranjangRepo.find({
      relations: [
        'property', 'user'
      ]
    });
    const datajasa = await this.jaFavRepo.find({
      relations: [
        'jasa', 'user'
      ]
    });
    // if (data) {
    return { data: { dataproperty, datajasa } }
    // } else {
    //   throw new BadRequestException({ message: 'data tidaka ada' });
    // }
  }

  async findOne(id: string) {
    const data = await this.keranjangRepo.findOne(id);
    // if (data) {
    return data
    // } else {
    //   throw new BadRequestException({ message: 'data tidaka ada' });
    // }
  }

  async removeproperty(id: string) {
    const data = await this.keranjangRepo.findOne(id);
    if (data) {
      return await this.keranjangRepo.remove(data);
    } else {
      throw new BadRequestException({ message: 'data tidak ada' });
    }
  }

  async removejasa(id: string) {
    const data = await this.jaFavRepo.findOne(id);
    if (data) {
      return await this.jaFavRepo.remove(data);
    } else {
      throw new BadRequestException({ message: 'data tidak ada' });
    }
  }
}
