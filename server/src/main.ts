import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const swagger_config = new DocumentBuilder()
        .setTitle('Cas Technique Homepilot API')
        .build();
    const document = SwaggerModule.createDocument(app, swagger_config);

    SwaggerModule.setup('api', app, document);
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.listen(process.env.SERVER_PORT);
}
bootstrap();
