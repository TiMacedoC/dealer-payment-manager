import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerMiddleware } from './middleware/swagger.middleware';
import packageJson from '../package.json';
import dotenv from 'dotenv';

import { env } from 'process';
import { RequestMethod } from '@nestjs/common';
import { CustomValidationPipe } from './common/pipes/custom-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });
  dotenv.config();

  app.setGlobalPrefix('manager', {
    exclude: [
      { path: 'api-docs', method: RequestMethod.ALL },
      { path: 'api-json', method: RequestMethod.ALL },
    ],
  });

  app.enableCors();
  app.useGlobalPipes(new CustomValidationPipe());

  swaggerMiddleware(app, {
    title: 'Employee Payment Manager',
    description: packageJson.description,
    version: packageJson.version,
  });

  await app.listen(env.PORT);

  console.log(`\n🚀 Server ready at http://localhost:${env.PORT}/api-docs\n`);
}
bootstrap();

//https://youtu.be/0Idug0e9tPw?t=1629
