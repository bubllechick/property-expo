import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileService } from 'src/file/file.service';
import { Like, Repository } from 'typeorm';
import { CreateJasaDto } from './dto/create-jasa.dto';
import { UpdateJasaDto } from './dto/update-jasa.dto';
import { Jasa } from './entities/jasa.entity';

@Injectable()
export class JasaService {
  constructor(
    @InjectRepository(Jasa) private jasaRepo: Repository<Jasa>,
    private fileService: FileService
  ) { }
  async create(dto: CreateJasaDto) {
    console.log(dto);
    if (dto.img1)
      await this.fileService
        .uploadImage(dto.img1, 'jasa')
        .then(({ hashedFileName: imageName }) => {
          dto.img1 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dto.img2)
      await this.fileService
        .uploadImage(dto.img2, 'jasa')
        .then(({ hashedFileName: imageName }) => {
          dto.img2 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dto.img3)
      await this.fileService
        .uploadImage(dto.img3, 'jasa')
        .then(({ hashedFileName: imageName }) => {
          dto.img3 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dto.img4)
      await this.fileService
        .uploadImage(dto.img4, 'jasa')
        .then(({ hashedFileName: imageName }) => {
          dto.img4 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dto.img5)
      await this.fileService
        .uploadImage(dto.img5, 'jasa')
        .then(({ hashedFileName: imageName }) => {
          dto.img5 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    const data = await this.jasaRepo.save({
      title: dto.title,
      img1: dto.img1,
      img2: dto.img2,
      img3: dto.img3,
      img4: dto.img4,
      img5: dto.img5,
      alamat: dto.alamat,
      desk: dto.desk,
      harga: dto.harga,
      jenis_jasa: dto.jenis_jasa,
      nama_perusahaan: dto.nama_perusahaan,
      user: dto.user
    });
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'menyimpan gagal periksa kembali datanya' });
    }
  }

  async findAll() {
    const data = await this.jasaRepo.find({ relations: ['user'] });
    // if (data) {
    return data
    // } else {
    //   throw new BadRequestException({ message: 'data tidak ada' });
    // }
  }

  async findOne(id: string) {
    const data = await this.jasaRepo.findOne(id);
    // if (data) {
    return data
    // } else {
    //   throw new BadRequestException({ message: 'data tidak ada' });
    // }
  }

  async update(id: string, dto: UpdateJasaDto) {
    dto.id = id
    const data_img = await this.jasaRepo.findOne(id);
    if (data_img.img1 === dto.img1) {
      dto.img1 = data_img.img1;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data_img.img1, 'jasa');
      if (dto.img1)
        await this.fileService
          .uploadImage(dto.img1, 'jasa')
          .then(({ hashedFileName: imageName }) => {
            dto.img1 = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }

    if (data_img.img2 === dto.img2) {
      dto.img2 = data_img.img2;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data_img.img2, 'jasa');
      if (dto.img2)
        await this.fileService
          .uploadImage(dto.img2, 'jasa')
          .then(({ hashedFileName: imageName }) => {
            dto.img2 = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }

    if (data_img.img3 === dto.img3) {
      dto.img3 = data_img.img3;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data_img.img3, 'jasa');
      if (dto.img3)
        await this.fileService
          .uploadImage(dto.img3, 'jasa')
          .then(({ hashedFileName: imageName }) => {
            dto.img3 = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }

    if (data_img.img4 === dto.img4) {
      dto.img4 = data_img.img4;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data_img.img4, 'jasa');
      if (dto.img4)
        await this.fileService
          .uploadImage(dto.img4, 'jasa')
          .then(({ hashedFileName: imageName }) => {
            dto.img4 = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }

    if (data_img.img5 === dto.img5) {
      dto.img5 = data_img.img5;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data_img.img5, 'jasa');
      if (dto.img5)
        await this.fileService
          .uploadImage(dto.img5, 'jasa')
          .then(({ hashedFileName: imageName }) => {
            dto.img5 = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }

    const data = await this.jasaRepo.save({
      id: dto.id,
      title: dto.title,
      img1: dto.img1,
      img2: dto.img2,
      img3: dto.img3,
      img4: dto.img4,
      img5: dto.img5,
      alamat: dto.alamat,
      desk: dto.desk,
      harga: dto.harga,
      jenis_jasa: dto.jenis_jasa,
      nama_perusahaan: dto.nama_perusahaan,
      user: dto.user
    });
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'menyimpan gagal periksa kembali datanya' });
    }
  }

  async remove(id: string) {
    const data = await this.jasaRepo.findOne(id);
    if (data) {
      return this.jasaRepo.remove(data)
    } else {
      throw new BadRequestException({ message: 'data tidak ada' });
    }
  }

  async findSearch(search) {
    console.log(search)
    return await this.jasaRepo.find({
      where: [
        { alamat: Like('%' + search + '%') },
        { harga: Like('%' + search + '%') },
        { jenis_jasa: Like('%' + search + '%') },
        { nama_perusahaan: Like('%' + search + '%') },
        { title: Like('%' + search + '%') }
      ], relations: ['user']
    });
  }


}
