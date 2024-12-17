import { Module } from '@nestjs/common';
import { SessionModule } from './modules/session/session.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { APP_PIPE } from '@nestjs/core';
import { CustomValidationPipe } from './common/pipes/custom-validation.pipe';

@Module({
  imports: [SessionModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
