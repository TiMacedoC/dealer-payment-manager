import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DealerService } from './dealer.service';
import { CreateDealerDto } from './dto/create-dealer.dto';
import { UpdateDealerDto } from './dto/update-dealer.dto';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

@ApiTags('Dealer')
@Controller('dealer')
export class DealerController {
  constructor(private readonly dealerService: DealerService) {}

  @Post()
  // create(@Body() createDealerDto: CreateDealerDto) {
  create(@Body() createDealerDto: Prisma.DealerCreateInput) {
    console.log('\n❓ ~createDealerDto:', createDealerDto, '❗\n');
    // return this.dealerService.create(createDealerDto);
  }

  @Get()
  findAll() {
    return this.dealerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDealerDto: UpdateDealerDto) {
    return this.dealerService.update(+id, updateDealerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dealerService.remove(+id);
  }
}
