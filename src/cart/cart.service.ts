import { Injectable } from '@nestjs/common';
import {Cart} from "./cart.model"

@Injectable()
export class CartService {
    private  cart: Cart[] = [];

    addToCart(title: string, price: number) {
        const  newCart= new Cart(title,price)
        this.cart.push(newCart)
       return newCart
    }

    getProducts() {
        return [...this.cart];
    }

    deleteProduct(prodId: string) {
        const index = this.deleteProduct(prodId)[1];
        this.cart.splice(index, 1);
    }

   
}