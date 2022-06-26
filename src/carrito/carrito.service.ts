import { Injectable } from '@nestjs/common';
import { Carrito } from 'src/interfaces/carrito.interface';
import { HttpException } from '@nestjs/common';
@Injectable()
export class CarritoService {
  private readonly cart: Carrito[] = [];

  create(prod: Carrito) {
    this.cart.push(prod);
  }

  findAll(): Carrito[] {
    return this.cart;
  }

  deleteAll(): Carrito[] {
    const prodDelete = this.cart.splice(0, this.cart.length);
    if (!prodDelete) {
      throw new HttpException('Esta vacio', 404);
    }
    return this.cart;
  }

  getCart(buyerId) {
    return new Promise((resolve) => {
      const prod = this.cart.find((prod) => prod.buyerId === buyerId);
      if (!prod) {
        throw new HttpException('No existe el carrito', 404);
      }
      resolve(prod);
    });
  }

  deleteId(buyerId) {
    return new Promise((resolve) => {
      const post = this.cart.splice(
        this.cart.findIndex((el) => el.buyerId === buyerId),
        1,
      );
      if (!post) {
        throw new HttpException('No existe el carrito', 404);
      }

      resolve(post);
    });
  }

  update(buyerId, body) {
    return new Promise((resolve) => {
      const index = this.cart.findIndex((prod) => prod.buyerId === buyerId);
      if (!index) {
        throw new HttpException('No existe el carrito', 404);
      }
      let newProduct = (this.cart[index] = { id: buyerId, ...body });

      resolve(newProduct);
    });
  }
}
