import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { Product } from './product.entity';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('price') prodPrice: number,
  ):Promise <Product> {
   return this.productsService.createProduct(prodTitle,prodPrice)
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id',ParseIntPipe) id:number):Promise<Product> {
    return this.productsService.getProductById(id);
  }

  // @Patch(':id')
  // updateProduct(
  //   @Param('id') prodId: string,
  //   @Body('title') prodTitle: string,
  //   @Body('price') prodPrice: number,
  // ) {
  //   this.productsService.updateProduct(prodId, prodTitle, prodPrice);
  //   return null;
  // }

  // @Delete(':id')
  // removeProduct(@Param('id') prodId: string) {
  //     this.productsService.deleteProduct(prodId);
  //     return null;
  // }
}
