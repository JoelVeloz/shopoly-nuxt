import { IFilter } from "@@/interfaces/IFilter";

export interface IAttributeFilter extends IFilter {
    keywords: (string)[];
    type: 'Attribute'
}

export function isAttributeFilter(obj: any): obj is IAttributeFilter {
    return 'type' in obj && obj.type === 'Attribute';
  }