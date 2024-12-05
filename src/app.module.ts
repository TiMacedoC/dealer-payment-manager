import { Module } from '@nestjs/common';
import { SessionModule } from './modules/session/session.module';
import { DealerModule } from './modules/dealer/dealer.module';

@Module({
  imports: [SessionModule, DealerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
