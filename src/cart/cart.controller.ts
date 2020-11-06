import { Body, Controller, Get, Post,Param,Delete } from '@nestjs/common';
import {CartService} from "./cart.service"

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}


    @Post()
    addcart(
      @Body('title') prodTitle: string,     
      @Body('price') prodPrice: number
    ) {
      const generatedId = this.cartService.addToCart(
        prodTitle,
        prodPrice
      );
      return { id: generatedId };
    }

    @Get()
    getAllProducts() {
        return this.cartService.getProducts();
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string) {
        this.cartService.deleteProduct(prodId);
        return null;
    }

  
   
}