import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileService } from 'src/file/file.service';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepo: Repository<Article>,
    private fileService: FileService
  ) { }
  async create(dto: CreateArticleDto) {
    if (dto.img)
      await this.fileService
        .uploadImage(dto.img, 'article')
        .then(({ hashedFileName: imageName }) => {
          dto.img = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    const data = await this.articleRepo.save({
      img: dto.img,
      title: dto.title,
      desk: dto.desk,
      user: dto.user
    });
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'data tidak tersimpan' })
    }
  }

  async update(id: string, dto: UpdateArticleDto) {
    dto.id = id
    const data_article = await this.articleRepo.findOne(id);
    if (data_article.img === dto.img) {
      dto.img = data_article.img;
      console.log('data tidak usah diubah');
    } else {
      this.fileService.delete(data_article.img, 'article');
      if (dto.img)
        await this.fileService
          .uploadImage(dto.img, 'article')
          .then(({ hashedFileName: imageName }) => {
            dto.img = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }
    const data = await this.articleRepo.save({
      id: dto.id,
      img: dto.img,
      title: dto.title,
      desk: dto.desk,
      user: dto.user
    });
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'data tidak tersimpan' })
    }
  }


  findAll() {
    return this.articleRepo.find();
  }

  async findOne(id: string) {
    const data = await this.articleRepo.findOne(id);
    if (data) {
      return data
    } else {
      throw new BadRequestException({ message: 'data tidak ada' })
    }
  }


  async remove(id: string) {
    const data = await this.articleRepo.findOne(id);
    const data_img = data.img;
    if (data) {
      this.fileService.delete(data_img, 'article');
      return await this.articleRepo.remove(data)
    } else {
      throw new BadRequestException({ message: 'data tidak ada' })
    }
  }
}
