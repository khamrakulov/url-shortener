import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Url } from './entities/url.entity';
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';

@Module({
  controllers: [UrlsController],
  providers: [UrlsService],
  imports: [SequelizeModule.forFeature([Url])],
})
export class UrlsModule {}
