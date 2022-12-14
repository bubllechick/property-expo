import { Module } from '@nestjs/common';
import { PengajuanService } from './pengajuan.service';
import { PengajuanController } from './pengajuan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pengajuan } from './entities/pengajuan.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Pengajuan
    ])
  ],
  controllers: [PengajuanController],
  providers: [PengajuanService]
})
export class PengajuanModule {}
