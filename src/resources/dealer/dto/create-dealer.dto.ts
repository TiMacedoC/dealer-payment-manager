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
    pattern:
      '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})',
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
