import { BaseItem } from "./BaseItem";

export interface IPivot {
    filestable_id: number;
    file_id: number;
    filestable_type: string;
    sort: number;
}

export interface IFile extends BaseItem {
  path: string;
  name: string;
  type: 'png' | 'webp' | 'jpeg' | 'jpg' ;
  status: string;
  url: string;
  pivot: IPivot
}
