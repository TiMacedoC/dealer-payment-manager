import { applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

export function DealerRegisterDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Register a new dealer to database' }),
  );
}
