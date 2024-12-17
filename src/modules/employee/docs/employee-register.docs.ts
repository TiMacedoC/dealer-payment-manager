import { applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

export function EmployeeRegisterDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Register a new employee to database' }),
  );
}
