import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthDto } from 'src/auth/auth.dto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { FileService } from 'src/file/file.service';
import { PropertyService } from 'src/property/property.service';
import { JasaService } from 'src/jasa/jasa.service';
import { Property } from 'src/property/entities/property.entity';
import { Jasa } from 'src/jasa/entities/jasa.entity';
import { async } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
    @InjectRepository(Jasa) private jasaRepo: Repository<Jasa>,
    private fileService: FileService
  ) { }

  async home(take = 5, page = 1) {
    const apartement = await this.propertyRepo.find({
      where: { kategori: 'apartement' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ], take, skip: take * (page - 1), order: { update_at: 'DESC' }
    })
    const gudang = await this.propertyRepo.find({
      where: { kategori: 'gudang' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ], take, skip: take * (page - 1), order: { update_at: 'DESC' }
    })
    const gedung = await this.propertyRepo.find({
      where: { kategori: 'gedung' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ], take, skip: take * (page - 1), order: { update_at: 'DESC' }
    })
    const lahan = await this.propertyRepo.find({
      where: { kategori: 'tanah' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ], take, skip: take * (page - 1), order: { update_at: 'DESC' }
    })
    const ruko = await this.propertyRepo.find({
      where: { kategori: 'ruko' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ], take, skip: take * (page - 1), order: { update_at: 'DESC' }
    })
    const rumah = await this.propertyRepo.find({
      where: { kategori: 'rumah' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ], take, skip: take * (page - 1), order: { update_at: 'DESC' }
    })
    const cottage = await this.propertyRepo.find({
      where: { kategori: 'cottage' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ], take, skip: take * (page - 1), order: { update_at: 'DESC' }
    })
    const kosan = await this.propertyRepo.find({
      where: { kategori: 'kosan' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ], take, skip: take * (page - 1), order: { update_at: 'DESC' }
    })
    const jasa = await this.jasaRepo.find({
      relations: [
        'user', 'jasaFav', 'jasaFav.user'
      ],
      take, skip: take * (page - 1), order: { update_at: 'DESC' }
    })
    return { data: { apartement, gudang, gedung, lahan, ruko, rumah, jasa, cottage, kosan } }
  }

  async getAllhome() {
    const apartement = await this.propertyRepo.find({
      where: { kategori: 'apartement' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    })
    const gudang = await this.propertyRepo.find({
      where: { kategori: 'gudang' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    })
    const gedung = await this.propertyRepo.find({
      where: { kategori: 'gedung' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    })
    const lahan = await this.propertyRepo.find({
      where: { kategori: 'tanah' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    })
    const ruko = await this.propertyRepo.find({
      where: { kategori: 'ruko' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    })
    const rumah = await this.propertyRepo.find({
      where: { kategori: 'rumah' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    })
    const cottage = await this.propertyRepo.find({
      where: { kategori: 'cottage' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    })
    const kosan = await this.propertyRepo.find({
      where: { kategori: 'kosan' }, relations: [
        'user', 'propertyFav', 'propertyFav.user'
      ]
    })
    const jasa = await this.jasaRepo.find({
      relations: [
        'user', 'jasaFav', 'jasaFav.user'
      ]
    })
    return { data: { apartement, gudang, gedung, lahan, ruko, rumah, jasa, cottage, kosan } }
  }

  async create(dto: CreateUserDto) {
    if (dto.foto)
      await this.fileService
        .uploadImage(dto.foto, 'user-profile')
        .then(({ hashedFileName: imageName }) => {
          dto.foto = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    dto.password = this.hash(dto.password)
    return this.userRepo.save({
      nama: dto.nama,
      foto: dto.foto,
      no_telp: dto.no_telp,
      password: dto.password,
      role: 'user'
    });
  }

  async update(id: string, dto: UpdateUserDto) {
    dto.id = id
    const data_profile = await this.userRepo.findOne(id);
    if (data_profile.foto === dto.foto) {
      dto.foto = data_profile.foto;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data_profile.foto, 'user-profile');
      if (dto.foto)
        await this.fileService
          .uploadImage(dto.foto, 'user-profile')
          .then(({ hashedFileName: imageName }) => {
            dto.foto = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }
    dto.password = this.hash(dto.password)
    return this.userRepo.save({
      id: dto.id,
      nama: dto.nama,
      foto: dto.foto,
      no_telp: dto.no_telp,
      password: dto.password,
      role: 'user'
    });
  }

  async createJasa(dto: CreateUserDto) {
    if (dto.foto)
      await this.fileService
        .uploadImage(dto.foto, 'user-profile')
        .then(({ hashedFileName: imageName }) => {
          dto.foto = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    dto.password = this.hash(dto.password)
    return this.userRepo.save({
      nama: dto.nama,
      foto: dto.foto,
      no_telp: dto.no_telp,
      password: dto.password,
      role: 'jasa'
    });
  }
  async updateJasa(id: string, dto: UpdateUserDto) {
    dto.id = id
    const data_profile = await this.userRepo.findOne(id);
    if (data_profile.foto === dto.foto) {
      dto.foto = data_profile.foto;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data_profile.foto, 'user-profile');
      if (dto.foto)
        await this.fileService
          .uploadImage(dto.foto, 'user-profile')
          .then(({ hashedFileName: imageName }) => {
            dto.foto = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }
    dto.password = this.hash(dto.password)
    return this.userRepo.save({
      id: dto.id,
      nama: dto.nama,
      foto: dto.foto,
      no_telp: dto.no_telp,
      password: dto.password,
      role: 'jasa'
    });
  }

  async createMitra(dto: CreateUserDto) {
    if (dto.foto)
      await this.fileService
        .uploadImage(dto.foto, 'user-profile')
        .then(({ hashedFileName: imageName }) => {
          dto.foto = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    dto.password = this.hash(dto.password)
    return this.userRepo.save({
      nama: dto.nama,
      foto: dto.foto,
      no_telp: dto.no_telp,
      password: dto.password,
      role: 'mitra'
    });
  }
  async updateMitra(id: string, dto: UpdateUserDto) {
    dto.password = this.hash(dto.password)
    const data_profile = await this.userRepo.findOne(id);
    if (data_profile.foto === dto.foto) {
      dto.foto = data_profile.foto;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data_profile.foto, 'user-profile');
      if (dto.foto)
        await this.fileService
          .uploadImage(dto.foto, 'user-profile')
          .then(({ hashedFileName: imageName }) => {
            dto.foto = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }
    dto.id = id
    return this.userRepo.save({
      id: dto.id,
      nama: dto.nama,
      foto: dto.foto,
      no_telp: dto.no_telp,
      password: dto.password,
      role: 'mitra'
    });
  }

  async createProperty(dto: CreateUserDto) {
    if (dto.foto)
      await this.fileService
        .uploadImage(dto.foto, 'user-profile')
        .then(({ hashedFileName: imageName }) => {
          dto.foto = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    dto.password = this.hash(dto.password)
    return this.userRepo.save({
      nama: dto.nama,
      foto: dto.foto,
      no_telp: dto.no_telp,
      password: dto.password,
      role: 'property'
    });
  }
  async updateProperty(id: string, dto: UpdateUserDto) {
    dto.id = id
    const data_profile = await this.userRepo.findOne(id);
    if (data_profile.foto === dto.foto) {
      dto.foto = data_profile.foto;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data_profile.foto, 'user-profile');
      if (dto.foto)
        await this.fileService
          .uploadImage(dto.foto, 'user-profile')
          .then(({ hashedFileName: imageName }) => {
            dto.foto = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }
    dto.password = this.hash(dto.password)
    return this.userRepo.save({
      id: dto.id,
      nama: dto.nama,
      foto: dto.foto,
      no_telp: dto.no_telp,
      password: dto.password,
      role: 'property'
    });
  }

  async createKontraktor(dto: CreateUserDto) {
    if (dto.foto)
      await this.fileService
        .uploadImage(dto.foto, 'user-profile')
        .then(({ hashedFileName: imageName }) => {
          dto.foto = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    dto.password = this.hash(dto.password)
    return this.userRepo.save({
      nama: dto.nama,
      foto: dto.foto,
      no_telp: dto.no_telp,
      password: dto.password,
      role: 'kontraktor'
    });
  }
  async updateKontraktor(id: string, dto: UpdateUserDto) {
    dto.id = id
    const data_profile = await this.userRepo.findOne(id);
    if (data_profile.foto === dto.foto) {
      dto.foto = data_profile.foto;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data_profile.foto, 'user-profile');
      if (dto.foto)
        await this.fileService
          .uploadImage(dto.foto, 'user-profile')
          .then(({ hashedFileName: imageName }) => {
            dto.foto = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }
    dto.password = this.hash(dto.password)
    return this.userRepo.save({
      id: dto.id,
      nama: dto.nama,
      foto: dto.foto,
      no_telp: dto.no_telp,
      password: dto.password,
      role: 'kontraktor'
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    // const d = await this.userRepo.findOne(id);
    // console.log(d.password);
    // const dd = await this.compare(d.password.toString, 11);

    // console.log(dd);
    const data_user = await this.userRepo.findOne(id, {
      relations: [
        'property', 'jasa',
        'favPro', 'favJasa',
        'favPro.property', 'favJasa.jasa'
      ]
    });
    if (data_user) {
      return data_user;
    } else {
      throw new BadRequestException({ message: 'data tidak ada' });
    }
  }

  async remove(id: string) {
    const data_user = await this.userRepo.findOne(id);
    const data_img = data_user.foto
    if (data_user) {
      this.fileService.delete(data_img, 'user-profile');
      return this.userRepo.remove(data_user);
    } else {
      throw new BadRequestException({ message: 'data tidak ada' });
    }
  }


  // async login(dto: AuthDto) {
  //   const no_telp = await this.loginCheck(dto)
  //   if (no_telp) {
  //     return no_telp;
  //   } else {
  //     throw new BadRequestException({ message: 'Login gagal' });
  //   }
  // }

  async findNoHp(no) {
    return await this.userRepo.findOne({ no_telp: no })
  }

  hash(plainpassword) {
    const hash = bcrypt.hashSync(plainpassword, 11)
    return hash
  }

  compare(plainpassword, hash) {
    const valid = bcrypt.compareSync(plainpassword, hash)
    return valid
  }
}
