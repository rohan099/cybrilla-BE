import { Body, Controller, Get, Post,Param,Delete } from '@nestjs/common';
import {CartService} from "./cart.service"
import {Cart} from "./cart.entity"
import {CartRepository} from "./cart.repository"
import { get } from 'http';
@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}


    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('price') prodPrice: number,
    ):Promise <Cart> {
    return this.cartService.createCart(prodTitle,prodPrice)
    }

    @Get()
    getAllProducts() {
        return this.cartService.getCarts();
    }

    @Get('/total')
    getTotal(){
        return this.cartService.getTotal();
    }
  
   
}