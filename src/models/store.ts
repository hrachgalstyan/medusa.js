import {
  Store as MedusaStore,
} from "@medusajs/medusa"
import {Entity, JoinColumn, OneToMany} from "typeorm"
import { User } from "./user";

@Entity()
export class Store extends MedusaStore {
  @OneToMany(() => User, (user) => user?.store, {
    eager: true,
  })
  @JoinColumn({ name: "store_id" })
  members?: User[];
}