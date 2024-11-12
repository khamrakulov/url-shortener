import { Body, Controller, Post } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post()
  async createUrl(@Body() createUrlDto: CreateUrlDto) {
    if (createUrlDto.shortUrl) {
      return await this.urlsService.createCustom(createUrlDto);
    }
    return await this.urlsService.createSimple(createUrlDto);
  }
}
