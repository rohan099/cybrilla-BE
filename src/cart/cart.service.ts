import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Cart} from "./cart.entity"
import {CartRepository} from "./cart.repository"

@Injectable()
export class CartService {

    constructor(@InjectRepository(CartRepository)
    private cartRepository:CartRepository){}

    async createCart(title: string, price: number):Promise <Cart> {
        const cart = new Cart();
        cart.title = title;
        cart.price = price
        await cart.save()
        return cart
      }
    
    getCarts() {
        const all= this.cartRepository.find()
        return all ;
    }
    async getCartById(id:number): Promise<Cart>{
        const found = await this.cartRepository.findOne(id);
        return found
    }

    async getTotal() {
        const total_amt = await this.cartRepository.query("SELECT SUM (price) AS total FROM public.cart")

        if(total_amt[0].total>=150){
            return total_amt[0].total-20
        }
        else{
            return total_amt[0].total
        }
        
      }
    
   
}