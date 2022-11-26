import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { FileService } from 'src/file/file.service';
import { Like, Repository } from 'typeorm';
import { CreatePropertyDto, CreateTanahDto, UpdateTanahDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
    private fileService: FileService
  ) { }
  async create(dto: CreatePropertyDto) {
    if (dto.img1)
      await this.fileService
        .uploadImage(dto.img1, 'property')
        .then(({ hashedFileName: imageName }) => {
          dto.img1 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dto.img2)
      await this.fileService
        .uploadImage(dto.img2, 'property')
        .then(({ hashedFileName: imageName }) => {
          dto.img2 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dto.img3)
      await this.fileService
        .uploadImage(dto.img3, 'property')
        .then(({ hashedFileName: imageName }) => {
          dto.img3 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dto.img4)
      await this.fileService
        .uploadImage(dto.img4, 'property')
        .then(({ hashedFileName: imageName }) => {
          dto.img4 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dto.img5)
      await this.fileService
        .uploadImage(dto.img5, 'property')
        .then(({ hashedFileName: imageName }) => {
          dto.img5 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    return this.propertyRepo.save({
      title: dto.title,
      img1: dto.img1,
      img2: dto.img2,
      img3: dto.img3,
      img4: dto.img4,
      img5: dto.img5,
      alamat: dto.alamat,
      sertifikat: dto.sertifikat,
      luas_bangunan: dto.luas_bangunan,
      luas_tanah: dto.luas_tanah,
      interior: dto.interior,
      tahun_dibuat: dto.tahun_dibuat,
      lantai: dto.lantai,
      listrik: dto.listrik,
      parkir: dto.parkir,
      harga: dto.harga,
      fasilitas: dto.fasilitas,
      balkon: dto.balkon,
      taman: dto.taman,
      teras: dto.teras,
      unit_pojokan: dto.unit_pojokan,
      kategori: dto.kategori,
      status: dto.status,
      desk: dto.desk,
      user: dto.user
    });
  }

  async update(id: string, dto: UpdatePropertyDto) {
    id = dto.id
    const data = await this.propertyRepo.findOne(id);
    if (data.img1 === dto.img1) {
      dto.img1 = data.img1;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data.img1, 'property');
      if (dto.img1)
        await this.fileService
          .uploadImage(dto.img1, 'property')
          .then(({ hashedFileName: imageName }) => {
            dto.img1 = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }

    if (data.img2 === dto.img2) {
      dto.img2 = data.img2;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data.img2, 'property');
      if (dto.img2)
        await this.fileService
          .uploadImage(dto.img2, 'property')
          .then(({ hashedFileName: imageName }) => {
            dto.img2 = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image ');
          });
      console.log('data harus diubah');
    }

    if (data.img3 === dto.img3) {
      dto.img3 = data.img3;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data.img3, 'property');
      if (dto.img3)
        await this.fileService
          .uploadImage(dto.img3, 'property')
          .then(({ hashedFileName: imageName }) => {
            dto.img3 = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }

    if (data.img4 === dto.img4) {
      dto.img4 = data.img4;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data.img4, 'property');
      if (dto.img4)
        await this.fileService
          .uploadImage(dto.img4, 'property')
          .then(({ hashedFileName: imageName }) => {
            dto.img4 = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }
    if (data.img5 === dto.img5) {
      dto.img5 = data.img5;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data.img5, 'property');
      if (dto.img5)
        await this.fileService
          .uploadImage(dto.img5, 'property')
          .then(({ hashedFileName: imageName }) => {
            dto.img5 = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }
    return this.propertyRepo.save({
      id: id,
      title: dto.title,
      img1: dto.img1,
      img2: dto.img2,
      img3: dto.img3,
      img4: dto.img4,
      img5: dto.img5,
      alamat: dto.alamat,
      sertifikat: dto.sertifikat,
      luas_bangunan: dto.luas_bangunan,
      luas_tanah: dto.luas_tanah,
      interior: dto.interior,
      tahun_dibuat: dto.tahun_dibuat,
      lantai: dto.lantai,
      listrik: dto.listrik,
      parkir: dto.parkir,
      harga: dto.harga,
      fasilitas: dto.fasilitas,
      balkon: dto.balkon,
      taman: dto.taman,
      teras: dto.teras,
      unit_pojokan: dto.unit_pojokan,
      kategori: dto.kategori,
      status: dto.status,
      desk: dto.desk,
      user: dto.user
    });
  }

  async createTanah(dto: CreateTanahDto) {
    let kategori = 'tanah';
    console.log(dto);
    const data = await this.propertyRepo.save({
      img1: dto.img1, img2: dto.img2, img3: dto.img3,
      img4: dto.img4, img5: dto.img5,
      luas_tanah: dto.luas_tanah,
      harga: dto.harga,
      alamat: dto.alamat,
      desk: dto.desk,
      sertifikat: dto.sertifikat,
      kategori: kategori,
      user: dto.user
    });
    if (data) {
      return { message: 'data berhasil tersimpan' }
    } else {
      throw new BadRequestException({ message: 'data tidak tersimpan' })
    }
  }

  async updateTanah(id: string, dto: UpdateTanahDto) {
    let kategori = 'tanah';
    console.log(id, dto);
    const data = await this.propertyRepo.save({
      id: dto.id,
      img1: dto.img1, img2: dto.img2, img3: dto.img3,
      img4: dto.img4, img5: dto.img5,
      luas_tanah: dto.luas_tanah,
      harga: dto.harga,
      alamat: dto.alamat,
      desk: dto.desk,
      sertifikat: dto.sertifikat,
      kategori: kategori,
      user: dto.user
    });
    if (data) {
      return { message: 'data berhasil tersimpan' }
    } else {
      throw new BadRequestException({ message: 'data tidak tersimpan' })
    }
  }

  // findAll() {
  //   return this.propertyRepo.find({
  //     relations: ['user']
  //   });
  // }

  async findAllLahan() {
    const data = await this.propertyRepo.find({
      where: { kategori: 'tanah' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    });
    return data
  }

  async findAllApartement() {
    const data = await this.propertyRepo.find({
      where: { kategori: 'apartement' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    });
    return data
  }
  

  async findAllRumah() {
    const data = await this.propertyRepo.find({
      where: { kategori: 'rumah' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    });
    return data
  }

  async findAllRuko() {
    const data = await this.propertyRepo.find({
      where: { kategori: 'ruko' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    });
    return data
  }

  async findAllGudang() {
    const data = await this.propertyRepo.find({
      where: { kategori: 'gudang' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    });
    return data
  }

  async findOne(id: string) {
    return await this.propertyRepo.findOne(id);
  }

  async remove(id: string) {
    let data_property = await this.propertyRepo.findOne(id);
    // if (data_property) {
    return this.propertyRepo.remove(data_property);
    // } else {
    //   throw new BadRequestException({ message: 'data tidak ada' });
    // }
  }
  async findAll() {
    return await this.propertyRepo.find({ relations: ['user', 'propertyFav', 'propertyFav.user'] })
  }

  async findSearch(search) {
    console.log(search)
    return await this.propertyRepo.find({
      where: [
        { alamat: Like('%' + search + '%') },
        { harga: Like('%' + search + '%') },
        { luas_tanah: Like('%' + search + '%') },
        { title: Like('%' + search + '%') },
        { kategori: Like('%' + search + '%') },
      ], relations: ['user']
    });
  }
}
