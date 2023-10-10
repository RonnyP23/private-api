import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {  SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  const corsOptions = {
    'Access-Control-Allow-Origin': 'https://br-anth-ro-angular-291699cb4ec2.herokuapp.com',
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type,Application',
     
      
    };
  
   app.use(cors(corsOptions));

  const config = new DocumentBuilder()
    .setTitle('Private api')
    .setDescription('The private Api')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  
  await app.listen(4000);
}
bootstrap();
