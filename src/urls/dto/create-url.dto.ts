import { IsBase32, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class CreateUrlDto {
  @IsNotEmpty({ message: 'Url should not be empty' })
  @IsUrl({}, { message: 'Incorrect url' })
  originalUrl: string;
  @IsOptional()
  @IsBase32()
  shortUrl: string;
}
