
import type { ICategory } from "@/interfaces/ICategory";
import { useCategoryStore } from "@/stores/categoryStore";
import { storeToRefs } from "pinia";

export const useCategory = () => {
  const API_URL = import.meta.env.VITE_API_URL + "categories";

  const categoryStore = useCategoryStore();
  const { data, limit, loading, totalResults, nextPageUrl, prevPageUrl } =
    storeToRefs(categoryStore);

  const getAllCategories = async () => {
    loading.value = true;
    fetch(API_URL)
      .then((res) => {
        res
          .json()
          .then((resbody) => {
            data.value = resbody.data;
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
  
  const findCategory = async (dto: ICategory) => {}; //TODO CHANGE CATEGORY DTOS
  const createCategory = async (payload: ICategory) => {};
  const updateCategory = async (id: string | number, payload: any) => {};
  const deleteCategory = async (id: string | number) => {};

  return {
    data,
    limit,
    loading,
    totalResults,
    nextPageUrl,
    prevPageUrl,

    //(functions)
    getAllCategories,
    findCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  };
};
