import { BaseItem } from "./BaseItem"

export interface ISku extends BaseItem{
    sku: string,
    stock: number,
    price: number,
    cost: number,
    item_id: number,
    sort: number,
    combination: string,
    profit: number,
    profit_percentage: number

    ///Default landing template
    title: string,
    keywords: (unknown)[],
    type:string
}