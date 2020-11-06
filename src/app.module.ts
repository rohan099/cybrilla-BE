import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductsModule } from './products/products.module';
import {CartModule} from "./cart/cart.module"


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig) ,
    ProductsModule,CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
