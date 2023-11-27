
import { IBadge } from "./IBadge";

export interface ISection {
    type: string,
    title?: string,
    alignment?: 'left' | 'center' | 'right' | string,
    "accent-text"?: string,
    cells?: number,
    subtitle?: string,
    content?: any | IBadge[],
    action?: string,
    model?: string
}

   
   