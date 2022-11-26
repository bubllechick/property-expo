import { Module } from '@nestjs/common';
import { JasaService } from './jasa.service';
import { JasaController } from './jasa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jasa } from './entities/jasa.entity';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Jasa])
  ],
  controllers: [JasaController],
  providers: [JasaService, FileService],
  exports: [JasaService]
})
export class JasaModule { }