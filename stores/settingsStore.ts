import type { ApiResponse } from '@/interfaces/IApiResponse';
import type { ISettings } from '@/interfaces/ISettings';
import { defineStore, acceptHMRUpdate } from 'pinia'

export interface ISettingsState extends IState {
    data: ISettings[]
}

export const useSettingsStore = defineStore('settingsStore', {
 state: (): ISettingsState => ({
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
    
    loadSettings(response:ApiResponse) {
            
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
 import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot))
}

