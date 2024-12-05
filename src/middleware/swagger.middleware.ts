import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

type SwaggerOptions = {
  title: string;
  description: string;
  version: string;
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
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document, {
    jsonDocumentUrl: 'api-json',
    yamlDocumentUrl: 'api-yaml',
    useGlobalPrefix: false,
  });
};
