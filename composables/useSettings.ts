
import type { ISettings } from "@/interfaces/ISettings";
import { useSettingsStore } from "@/stores/settingsStore";
import { storeToRefs } from "pinia";

export const useSettings = () => {
  const API_URL = 'https://gist.githubusercontent.com/porrasmdz/ddc5a9381d69cc4b111710878238294d/raw/977620dab247847673d2b9e6add91b28bd755142/settings.json'
  // const API_URL = import.meta.env.VITE_API_URL + "settings";

  const settingsStore = useSettingsStore();
  const { data, limit, loading, totalResults, nextPageUrl, prevPageUrl } =
    storeToRefs(settingsStore);

  const getAllSettings = async () => {
    loading.value = true;
    fetch(API_URL, { 
      
    })
      .then((res) => {

        res
          .json()
          .then((resbody) => {
            
            data.value = resbody;
            loading.value = false;
          })
          .catch((err) => {
            
            console.log(err)
            loading.value = false;
          });
      })
      .catch((err) => {
        console.log("Error", err);
        loading.value = false;
      });
  };
  const findSettings = async (dto: ISettings) => {}; //TODO CHANGE CATEGORY DTOS
  const createSettings = async (payload: ISettings) => {};
  const updateSettings = async (id: string | number, payload: any) => {};
  const deleteSettings = async (id: string | number) => {};

  return {
    data,
    limit,
    loading,
    totalResults,
    nextPageUrl,
    prevPageUrl,

    //(functions)
    getAllSettings,
    findSettings,
    createSettings,
    updateSettings,
    deleteSettings,
  };
};
