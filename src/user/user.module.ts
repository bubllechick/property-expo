import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FileService } from 'src/file/file.service';
import { PropertyModule } from 'src/property/property.module';
import { JasaModule } from 'src/jasa/jasa.module';
import { Property } from 'src/property/entities/property.entity';
import { Jasa } from 'src/jasa/entities/jasa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User, Property, Jasa
    ]),
    PropertyModule,
    JasaModule
  ],
  controllers: [UserController],
  providers: [UserService, FileService],
  exports: [UserService]
})
export class UserModule { }
