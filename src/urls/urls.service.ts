import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Url } from './entities/url.entity';

interface SimpleUrlAttrs {
  originalUrl: string;
}

interface CustomUrlAttrs extends SimpleUrlAttrs {
  shortUrl: string;
}

@Injectable()
export class UrlsService {
  constructor(@InjectModel(Url) private urlsRepository: typeof Url) {}

  private generateShortUrl(originalUrl) {
    return Math.random().toString(36).substring(2, 8);
  }

  async createSimple(createSimpleUrlDto: SimpleUrlAttrs) {
    let urlObj: any = createSimpleUrlDto;
    urlObj.shortUrl = this.generateShortUrl(createSimpleUrlDto.originalUrl);
    const url = await this.urlsRepository.create(urlObj);

    return url;
  }

  async createCustom(createCustomUrlDto: CustomUrlAttrs) {
    const existingUrl = await this.urlsRepository.findOne({
      where: { shortUrl: createCustomUrlDto.shortUrl },
    });

    if (existingUrl) {
      throw new BadRequestException('Custom short url already exists');
    }

    return await this.urlsRepository.create(createCustomUrlDto);
  }
}
