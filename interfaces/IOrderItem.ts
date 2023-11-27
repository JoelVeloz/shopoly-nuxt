import { BaseItem } from "./BaseItem";

export interface IOrderItem extends BaseItem {
    name: string,
    status: string,
    payment_status: string,
    payment_method: string,
    user_id: number,
    total_price: number,
    total_cost: number,
    profit: number,
    total_quantity: number
}
     