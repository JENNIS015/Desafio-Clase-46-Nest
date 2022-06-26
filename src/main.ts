import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* Config Swagger*/
  const options = new DocumentBuilder()
    .setTitle('Productos')
    .setDescription('Desafio para la clase 45')
    .setVersion('1.0.0')
    .addTag('productos')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(8080, () => {
    console.log('App ejecutando en http://localhost:8080/');
  });
}

bootstrap();


