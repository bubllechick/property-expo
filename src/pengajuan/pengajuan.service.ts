import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePengajuanDto } from './dto/create-pengajuan.dto';
import { UpdatePengajuanDto } from './dto/update-pengajuan.dto';
import { Pengajuan } from './entities/pengajuan.entity';

@Injectable()
export class PengajuanService {
  @InjectRepository(Pengajuan) private pengajuanRepo: Repository<Pengajuan>

  async create(dto: CreatePengajuanDto) {
    // return console.log(dto);
    const data = await this.pengajuanRepo.save({
      nama: dto.nama,
      ktp: dto.ktp,
      tmpt_lahir: dto.tmpt_lahir,
      tgl_lahir: dto.tgl_lahir,
      jenis_kelamin: dto.jenis_kelamin,
      alamat: dto.alamat,
      provinsi: dto.provinsi,
      kota: dto.kota,
      kelurahan: dto.kelurahan,
      desa: dto.desa,
      rt: dto.rt,
      rw: dto.rw,
      kode_pos: dto.kode_pos,
      // info pekerjaan
      jenis_pekerjaan: dto.jenis_kelamin,
      nama_perusahaan: dto.nama_perusahaan,
      tlp_perusahaan: dto.tlp_perusahaan,
      penghasilan_perbulan: dto.penghasilan_perbulan,
      pengeluaran_lain: dto.pengeluaran_lain,
      biaya_hidup: dto.biaya_hidup,
      bank: dto.bank,
      tenor: dto.tenor,
      user: dto.user,
      property: { id: dto.property_id }
    });
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'periksa kembali inputan anda' });
    }
  }

  findAll() {
    return `This action returns all pengajuan`;
  }

  async findOne(id: string) {
    const data = await this.pengajuanRepo.findOne(id);
    if (data) {
      return data;
    } else {
      throw new BadRequestException({ message: 'data tidak ditemukan' });
    }
  }

  async update(id: string, dto: UpdatePengajuanDto) {
    dto.id = id
    const data = await this.pengajuanRepo.save({
      id: dto.id,
      nama: dto.nama,
      ktp: dto.ktp,
      tmpt_lahir: dto.tmpt_lahir,
      tgl_lahir: dto.tgl_lahir,
      jenis_kelamin: dto.jenis_kelamin,
      alamat: dto.alamat,
      provinsi: dto.provinsi,
      kota: dto.kota,
      kelurahan: dto.kelurahan,
      desa: dto.desa,
      rt: dto.rt,
      rw: dto.rw,
      kode_pos: dto.kode_pos,
      // info pekerjaan
      jenis_pekerjaan: dto.jenis_kelamin,
      nama_perusahaan: dto.nama_perusahaan,
      tlp_perusahaan: dto.tlp_perusahaan,
      penghasilan_perbulan: dto.penghasilan_perbulan,
      pengeluaran_lain: dto.pengeluaran_lain,
      biaya_hidup: dto.biaya_hidup,
      bank: dto.bank,
      tenor: dto.tenor,
      user: dto.user,
      property: { id: dto.property_id }
    });
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'periksa kembali inputan anda' });
    }
  }

  async remove(id: string) {
    const data = await this.pengajuanRepo.findOne(id);
    if (data) {
      return await this.pengajuanRepo.remove(data);
    } else {
      throw new BadRequestException({ message: 'data tidak ada' });
    }
  }
}
