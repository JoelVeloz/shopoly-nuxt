import { IFilter } from "@/interfaces/IFilter";

export interface IPriceFilter extends IFilter {
    currency: 'dollar'|'euro'| 'cop';
    type: 'Price'
}

export function isPriceFilter(obj: any): obj is IPriceFilter {
    return 'type' in obj && obj.type === 'Price';
  }