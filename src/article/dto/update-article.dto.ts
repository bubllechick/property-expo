import { PartialType } from '@nestjs/swagger';
import { ArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(ArticleDto) {}
