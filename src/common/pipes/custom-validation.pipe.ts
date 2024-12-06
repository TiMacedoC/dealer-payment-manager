import {
  HttpStatus,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common'

export class CustomValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super({
      transform: true,
      whitelist: true,
      validateCustomDecorators: true,
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      ...options,
    })
  }
}
