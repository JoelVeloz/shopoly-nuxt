import { IColorFilter } from "@/interfaces/IColorFilter";
import { ISku } from "./ISku";

export interface IColorSku extends  Omit<ISku, 'keywords' | 'type'>, Pick<IColorFilter, 'keywords' | 'type'>{
    
}
export function isColorSku(obj: any): obj is IColorSku {
    return 'type' in obj && obj.type === 'Color';
  }
