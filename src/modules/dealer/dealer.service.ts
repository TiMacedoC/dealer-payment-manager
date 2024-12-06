import { Inject, Injectable } from '@nestjs/common';
import { CreateDealerDto } from './dto/create-dealer.dto';
import { UpdateDealerDto } from './dto/update-dealer.dto';
import { PrismaService } from '../../database/PrismaService';

@Injectable()
export class DealerService {
  constructor(
    @Inject()
    private readonly prismaService: PrismaService,
  ) {}

  async register(createDealerDto: CreateDealerDto) {
    console.log('\n❓ ~createDealerDto:', createDealerDto, '❗\n');
    return createDealerDto;
    const res = await this.prismaService.dealer.create({
      data: createDealerDto,
    });
    console.log('\n❓ ~res:', res, '❗\n');

    return res;
  }

  findAll() {
    return `This action returns all dealer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dealer`;
  }

  update(id: number, updateDealerDto: UpdateDealerDto) {
    return `This action updates a #${id} dealer`;
  }

  remove(id: number) {
    return `This action removes a #${id} dealer`;
  }
}
