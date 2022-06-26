import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from 'src/dto/create-producto.dto';
import { Producto } from 'src/interfaces/producto.interface';

@Controller('producto')
export class ProductoController {
  constructor(private readonly prodService: ProductoService) {}

  @Post()
  async create(
    @Body() createProductoDto: CreateProductoDto,
  ): Promise<Producto> {
    this.prodService.create(createProductoDto);
    return createProductoDto;
  }

  @Get()
  async findAll(): Promise<Producto[]> {
    return this.prodService.findAll();
  }
  @Delete()
  async deleteAll(): Promise<Producto[]> {
    return this.prodService.deleteAll();
  }

  @Get('/:id')
  async getProduct(@Param('id') id: string) {
    const product = await this.prodService.getProduct(id);
    if (!product) console.log('no se encontro producto');
    return product;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCatDto: CreateProductoDto,
  ) {
    const product = await this.prodService.update(id, updateCatDto);
    return product;
  }

  @Delete(':id')
  async deleteId(@Param('id') id: string) {
    return this.prodService.deleteId(id);
  }
}



