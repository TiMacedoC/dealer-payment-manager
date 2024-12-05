import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';

export class CreateDealerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: 'Daniel Morais',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: '12345678910',
  })
  cpf: string;

  @IsString()
  @ApiProperty({
    type: String,
    default: '12345678910',
  })
  pixKey: string;
}
