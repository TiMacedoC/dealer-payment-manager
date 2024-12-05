import { Module } from '@nestjs/common';
import { DealerService } from './dealer.service';
import { DealerController } from './dealer.controller';
import { PrismaService } from '../../database/PrismaService';

@Module({
  controllers: [DealerController],
  providers: [DealerService, PrismaService],
})
export class DealerModule {}
