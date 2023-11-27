export interface ILink {
  url?: string;
  label: string;
  active: boolean;
}
export interface ApiResponse {
  current_page: number;
  data: any;

  first_page_url: string;
  last_page: number;
  last_page_url: string;

  links: ILink[];

  next_page_url?: string;
  prev_page_url?: string;
  
  path: string;
  per_page: number;
  
  from: number;
  to: number;
  total: number;
}
