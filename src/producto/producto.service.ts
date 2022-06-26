import { Injectable } from '@nestjs/common';
import { Producto } from 'src/interfaces/producto.interface';
import { HttpException } from '@nestjs/common';
@Injectable()
export class ProductoService {
  private readonly productos: Producto[] = [];

  create(prod: Producto) {
    this.productos.push(prod);
  }

  findAll(): Producto[] {
    return this.productos;
  }
  deleteAll(): Producto[] {
 
    const prodDelete = this.productos.splice(0, this.productos.length);
    if (!prodDelete) {
      throw new HttpException('Esta vacio', 404);
    }
    return this.productos;
  }

  getProduct(productId) {
    return new Promise((resolve) => {
      const prod = this.productos.find((prod) => prod.id === productId);
      if (!prod) {
        throw new HttpException('No existe el producto', 404);
      }
      resolve(prod);
    });
  }

  deleteId(productId) {
    return new Promise((resolve) => {
      const post = this.productos.splice(
        this.productos.findIndex((el) => el.id === productId),
        1,
      );
      if (!post) {
        throw new HttpException('No existe el producto', 404);
      }

      resolve(post);
    });
  }

  update(productId, body) {
    return new Promise((resolve) => {
      const index = this.productos.findIndex((prod) => prod.id === productId);
      if (!index) {
        throw new HttpException('No existe el producto', 404);
      }
      let newProduct = (this.productos[index] = { id: productId, ...body });

      resolve(newProduct);
    });
  }
}
