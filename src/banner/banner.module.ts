import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerHomeDown } from './entities/bannerHomeDown.entity';
import { BannerHomeUp } from './entities/bannerHomeUp.entity';
import { BannerJasa } from './entities/bannerJasa.entity';
import { BannerProperty } from './entities/bannerProperty.entity';
import { BedahRumah } from './entities/bedahRumah.entity';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BannerHomeDown,
      BannerHomeUp,
      BannerJasa,
      BannerProperty,
      BedahRumah
    ])
  ],
  controllers: [BannerController],
  providers: [BannerService, FileService]
})
export class BannerModule { }
