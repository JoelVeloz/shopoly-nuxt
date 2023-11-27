
import type { ApiResponse } from "@@/interfaces/IApiResponse";
import type { IItem } from "@@/interfaces/IItem";
import { useQueryItemStore } from "@@/stores/queryItemStore";
import { storeToRefs } from "pinia";

export const useQueryItem = () => {
  const API_URL = import.meta.env.VITE_API_URL + "items";

  const itemStore = useQueryItemStore();
  const { data, limit, loading, page, totalResults, nextPageUrl, prevPageUrl, totalPages } =
    storeToRefs(itemStore);

  const getAllItems = async (url?: string) => {
    let targetUrl = (url ?? API_URL )
    loading.value = true;
    fetch(targetUrl, {
      headers:{},
      
    })
      .then((res) => {
        res
          .json()
          .then((resbody:ApiResponse) => {
            data.value = resbody.data;
            page.value = resbody.current_page;
            totalResults.value = resbody.total;
            totalPages.value = resbody.last_page;
            nextPageUrl.value = resbody.next_page_url;
            prevPageUrl.value = resbody.prev_page_url; 
            loading.value = false;
          })
          .catch((err) => {
            loading.value = false;
          });
      })
      .catch((err) => {
        console.log("Error", err);
        loading.value = false;
      });
  };

  const updateQuery = async (query:string) => {
    getAllItems(API_URL+`?name=${query}&per_page=6`)
  }
  const findItem = async (dto: IItem) => {}; //TODO CHANGE CATEGORY DTOS
  const createItem = async (payload: IItem) => {};
  const updateItem = async (id: string | number, payload: any) => {};
  const deleteItem = async (id: string | number) => {};

  return {
    data,
    limit,
    loading,
    page,
    totalResults,
    totalPages,
    nextPageUrl,
    prevPageUrl,

    //(functions)
    getAllItems,
    updateQuery,
    findItem,
    createItem,
    updateItem,
    deleteItem,
  };
};
