import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { CarritoModule } from './carrito/carrito.module';

@Module({
  imports: [ProductoModule, CarritoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
