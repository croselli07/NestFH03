import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  //filtros para toda la app
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Valida cada atributo del DTO concuerde con lo seteado
      forbidNonWhitelisted: true, //Te aclara q propiedades , estas mando de mas
    }),
  )
  await app.listen(3000);
}
main();
