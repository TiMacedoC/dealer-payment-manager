import { Module } from '@nestjs/common';
import { SessionModule } from './resources/session/session.module';
import { DealerModule } from './resources/dealer/dealer.module';

@Module({
  imports: [SessionModule, DealerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
