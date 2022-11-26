import { Module } from '@nestjs/common';
import { SponsorService } from './sponsor.service';
import { SponsorController } from './sponsor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sponsor } from './entities/sponsor.entity';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sponsor])
  ],
  controllers: [SponsorController],
  providers: [SponsorService, FileService]
})
export class SponsorModule {}
