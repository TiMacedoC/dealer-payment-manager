import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { SanitizeCpf } from '../../../common/decorators/cpf-sanitize.decorator';
import { IsCpf } from '../../../common/decorators/is-cpf.decorator';
import { Type } from 'class-transformer';

export class CreateEmployeeDto {
  @ApiProperty({
    example: 'Igor Correa',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '06966119024' })
  @IsNotEmpty()
  @IsCpf()
  @SanitizeCpf()
  cpf: string;

  @ApiProperty({
    example: 'Piolho',
  })
  @IsString()
  @IsOptional()
  nickName?: string;

  @ApiProperty({ example: '1' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  roleId: number;

  @ApiProperty({
    example: '1993-09-03',
  })
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  birthDate: Date;

  @ApiProperty({
    example: '28873400000',
  })
  @IsString()
  pixKey: string;
}
