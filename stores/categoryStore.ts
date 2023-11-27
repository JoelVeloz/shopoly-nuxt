import type { ApiResponse } from '@/interfaces/IApiResponse';
import type { ICategory } from '@/interfaces/ICategory';
import { defineStore, acceptHMRUpdate } from 'pinia'

export interface ICategoryState extends IState {
    data: ICategory[]
}

export const useCategoryStore = defineStore('categoryStore', {
 state: (): ICategoryState => ({
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
    
    loadCategory(response:ApiResponse) {
            
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
 import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot))
}



// export const useQueryPostsStore = defineStore({
//     id: 'queryposts',
//     state: () => ({
//         titleQuery:'',
//         posts: [] ,
//         selectedPost: {},
//         prevFilters: {},
//         error: '',
//         loading: false,
//         results: 0,
//         page:1,
//         nextPage:null,
//         prevPage:null,
//         totalPages:1,
//     }),
//     getters: {},
//     actions: {
//         getPostById(id) {
//             this.selectedPost = this.posts?.find((post) => post.id == id);
            
//         },
//         loadPosts(data) {
//             try {
//                 this.posts = data.data.data;
//                 this.results = data.data.total;
//                 this.totalPages = data.data.totalPages;
//                 this.nextPage = data.data.nextPage;
//                 this.prevPage = data.data.prevPage;
                
//                 this.page = data.data.page;
//            } catch (error) {
//                 this.error = error;
//                 console.error(error);
//            }
//         },
     
//     }
// });

