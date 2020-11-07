import {BaseEntity,Column,Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import {Product} from "../products/product.entity"

@Entity()
export class Cart extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    title:string;

    @Column()
    price:number;

    @OneToMany(()=>Product,(product:Product)=>{product.id,product.title,product.price})
    @JoinColumn()
    public product:Product

}