import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { SanitizeCpf } from '../../../common/decorators/cpf-sanitize.decorator';
import { IsCpf } from '../../../common/decorators/is-cpf.decorator';
import { Type } from 'class-transformer';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Igor Correa',
  })
  name: string;

  @ApiProperty({ example: '06966119024' })
  @IsNotEmpty()
  @IsCpf()
  @SanitizeCpf()
  cpf: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Piolho',
  })
  nickName?: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  @ApiProperty({
    example: '1993-09-03',
  })
  birthDate: Date;

  @IsString()
  @ApiProperty({
    example: '28873400000',
  })
  pixKey: string;
}
