import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('API-[SUSUTITUIR por el Nombre de la Aplicación]')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('api')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
