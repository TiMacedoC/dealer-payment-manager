import { Inject, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from '../../database/PrismaService';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject()
    private readonly prismaService: PrismaService,
  ) {}

  async register(createEmployeeDto: CreateEmployeeDto) {
    const res = await this.prismaService.employee.create({
      data: createEmployeeDto,
    });
    console.log('\n❓ ~res:', res, '❗\n');

    return res;
  }

  findAll() {
    return `This action returns all employee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
