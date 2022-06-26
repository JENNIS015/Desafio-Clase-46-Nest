import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CreateCarritoDto } from 'src/dto/create-carrito.dto';
import { Carrito } from 'src/interfaces/carrito.interface';

@Controller('carrito')
export class CarritoController {
  constructor(private readonly cartService: CarritoService) {}

  @Post()
  async create(@Body() createCartServ: CreateCarritoDto): Promise<Carrito> {
    this.cartService.create(createCartServ);
    return createCartServ;
  }

  @Get()
  async findAll(): Promise<Carrito[]> {
    return this.cartService.findAll();
  }
  @Delete()
  async deleteAll(): Promise<Carrito[]> {
    return this.cartService.deleteAll();
  }

  @Get('/:id')
  async getProduct(@Param('id') id: string) {
    const product = await this.cartService.getCart(id);
    if (!product) console.log('no se encontro producto');
    return product;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCatDto: CreateCarritoDto,
  ) {
    const product = await this.cartService.update(id, updateCatDto);
    return product;
  }

  @Delete(':id')
  async deleteId(@Param('id') id: string) {
    return this.cartService.deleteId(id);
  }
}
