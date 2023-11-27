import { BaseItem } from "./BaseItem";

export interface ICategory extends BaseItem {
    name: string,
    icon: unknown,
    description: string,
    sort: number
}