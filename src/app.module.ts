import { Module } from '@nestjs/common';
import { SessionModule } from './modules/session/session.module';
import { DealerModule } from './modules/dealer/dealer.module';
import { APP_PIPE } from '@nestjs/core';
import { CustomValidationPipe } from './common/pipes/custom-validation.pipe';

@Module({
  imports: [SessionModule, DealerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
