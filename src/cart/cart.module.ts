import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';


@Module({
    controllers: [CartController],
    providers: [CartService],
})
export class CartModule {}