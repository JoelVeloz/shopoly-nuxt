import { IAttributeFilter } from "./IAttributeFilter";
import { ISku } from "./ISku";

export interface IAttributeSku extends Omit<ISku, 'keywords' | 'type'>, Pick<IAttributeFilter, 'keywords' | 'type'>{
    
}


export function isAttributeSku(obj: any): obj is IAttributeSku {
    return 'type' in obj && obj.type === 'Attribute';
  }
