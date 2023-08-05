import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerMiddleware } from './middleware/swagger.middleware';
import packageJson from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swaggerMiddleware(app, {
    title: 'Dealer Payment Manager',
    description: packageJson.description,
    version: packageJson.version,
    tag: 'payment-manager',
  });

  await app.listen(3000);
}
bootstrap();
