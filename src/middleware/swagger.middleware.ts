import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

type SwaggerOptions = {
  title: string;
  description: string;
  version: string;
  tag: string;
};

export const swaggerMiddleware = (
  app: INestApplication,
  swaggerOptions: SwaggerOptions,
): void => {
  const config = new DocumentBuilder()
    .setTitle(swaggerOptions.title)
    .setDescription(swaggerOptions.description)
    .setVersion(swaggerOptions.version)
    .addBearerAuth({
      type: 'apiKey',
      in: 'header',
      name: 'user-token',
    })
    .addTag(swaggerOptions.tag)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);
};
