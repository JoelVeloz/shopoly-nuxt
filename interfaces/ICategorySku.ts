import type { ICategoryFilter } from "@/interfaces/ICategoryFilter";
import type { ISku } from "./ISku";

export interface ICategorySku extends Omit<ISku, 'keywords' | 'type'>, Pick<ICategoryFilter, 'keywords' | 'type'>{
    
}

export function isCategorySku(obj: any): obj is ICategorySku {
    return 'type' in obj && obj.type === 'Category';
  }
