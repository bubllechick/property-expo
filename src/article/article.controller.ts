import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@ApiTags('article')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({type: CreateArticleDto})
  create(@InjectUser() dto: CreateArticleDto) {
    return this.articleService.create(dto);
  }

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({type: UpdateArticleDto})
  update(@Param('id') id: string, @InjectUser() dto: UpdateArticleDto) {
    return this.articleService.update(id, dto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.articleService.remove(id);
  }
}
