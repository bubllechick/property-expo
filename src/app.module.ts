import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { KeranjangModule } from './keranjang/keranjang.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { PropertyModule } from './property/property.module';
import { Property } from './property/entities/property.entity';
import { JasaModule } from './jasa/jasa.module';
import { Jasa } from './jasa/entities/jasa.entity';
import { PengajuanModule } from './pengajuan/pengajuan.module';
import { Pengajuan } from './pengajuan/entities/pengajuan.entity';
import { EventModule } from './event/event.module';
import { Event } from './event/entities/event.entity';
import { FileModule } from './file/file.module';
import { Keranjang } from './keranjang/entities/keranjang.entity';
import { ArticleModule } from './article/article.module';
import { Article } from './article/entities/article.entity';
import { JasaFav } from './keranjang/entities/jasa-fav.entity';
import { SponsorModule } from './sponsor/sponsor.module';
import { Sponsor } from './sponsor/entities/sponsor.entity';
import { BannerModule } from './banner/banner.module';
import { BedahRumah } from './banner/entities/bedahRumah.entity';
import { BannerHomeDown } from './banner/entities/bannerHomeDown.entity';
import { BannerHomeUp } from './banner/entities/bannerHomeUp.entity';
import { BannerJasa } from './banner/entities/bannerJasa.entity';
import { BannerProperty } from './banner/entities/bannerProperty.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      wait_timeout: 60000,
      entities: [
        User,
        Property,
        Jasa,
        Pengajuan,
        Event,
        Keranjang,
        JasaFav,
        Article,
        Sponsor,
        BannerHomeDown,
        BannerHomeUp,
        BannerJasa,
        BannerProperty,
        BedahRumah
      ],
      synchronize: true
    }),
    UserModule,
    KeranjangModule,
    AuthModule,
    PropertyModule,
    JasaModule,
    PengajuanModule,
    EventModule,
    FileModule,
    ArticleModule,
    SponsorModule,
    BannerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
