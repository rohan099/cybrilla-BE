import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';



@Injectable()
export class ProductsService {
  // private products: Product[] = [];
 constructor(
   @InjectRepository(ProductRepository)
   private productRepository:ProductRepository
 ){}

  async createProduct(title: string, price: number):Promise <Product> {
    const product = new Product();
    product.title = title;
    product.price = price
    await product.save()
    return product
  }

  getProducts() {
    const all= this.productRepository.find()
    return all ;
  }
  async getProductById(id:number): Promise<Product>{
    const found = await this.productRepository.findOne(id);
    return found
  }

  

 

  // getSingleProduct(productId: string) {
  //   const product = this.findProduct(productId)[0];
  //   return { ...product };
  // }

  // updateProduct(productId: string, title: string,  price: number) {
  //   const [product, index] = this.findProduct(productId);
  //   const updatedProduct = { ...product };
  //   if (title) {
  //     updatedProduct.title = title;
  //   }
   
  //   if (price) {
  //     updatedProduct.price = price;
  //   }
  //   this.products[index] = updatedProduct;
  // }

  // deleteProduct(prodId: string) {
  //     const index = this.findProduct(prodId)[1];
  //     this.products.splice(index, 1);
  // }

  // private findProduct(id: string): [Product, number] {
  //   const productIndex = this.products.findIndex(prod => prod.id === id);
  //   const product = this.products[productIndex];
  //   if (!product) {
  //     throw new NotFoundException('Could not find product.');
  //   }
  //   return [product, productIndex];
  // }
}
