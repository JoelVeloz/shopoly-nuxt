import type { ApiResponse } from '@/interfaces/IApiResponse';
import type { IOrderItem } from '@/interfaces/IOrderItem';
import { defineStore, acceptHMRUpdate } from 'pinia'

export interface IOrderItemState extends IState {
    data: IOrderItem[]
}

export const useOrderItemStore = defineStore('orderItemStore', {
 state: (): IOrderItemState => ({
  data: [],
  
  loading: false,
  limit: 10,
  page:1,
  error:'',
  totalResults: 0,
  totalPages:1,
  nextPageUrl:null,
  prevPageUrl: null 
 }),

 getters: {},
 actions: {
    
    loadOrderItem(response:ApiResponse) {
            
        this.data = response.data;
        
        this.totalResults = response.total;
        this.page = response.current_page;
        this.totalPages = response.last_page;           
        this.nextPageUrl = response.next_page_url;
        this.prevPageUrl = response.prev_page_url
    },
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useOrderItemStore, import.meta.hot))
}


