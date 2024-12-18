import { Module } from '@nestjs/common';
import { SessionModule } from './modules/session/session.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [SessionModule, EmployeeModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
