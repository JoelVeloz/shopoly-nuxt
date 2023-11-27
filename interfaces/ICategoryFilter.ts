import { IFilter } from "@/interfaces/IFilter";

export interface ICategoryFilter extends IFilter {
    keywords: ({key:string, results: number})[];
    type: 'Category';
}


export function isCategoryFilter(obj: any): obj is ICategoryFilter {
    return 'type' in obj && obj.type === 'Category';
  }