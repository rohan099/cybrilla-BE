import {BaseEntity,Column,Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm"
import {Product} from "../products/product.entity"

@Entity()
export class cart extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @OneToOne(()=>Product)
    @JoinColumn()
    product:Product

}