
import type { IOrderItem } from '@/interfaces/IOrderItem';
import { useOrderItemStore } from '@@/stores/orderStore';
import { storeToRefs } from 'pinia';

export const useOrder = () => {
    
  const API_URL = import.meta.env.VITE_API_URL + "orders";
    const orderStore = useOrderItemStore();
    const { data, limit, loading, totalResults, nextPageUrl, prevPageUrl } = storeToRefs(orderStore);

    const getAllOrders = async () => { 
        loading.value = true;
        fetch(API_URL)
        .then((res)=> {
            res.json()
            .then((resbody)=> {
                data.value = resbody.data
                console.log(data.value)
                loading.value = false
            })
            .catch((err)=> {
                loading.value = false
            }); 
        })
        .catch((err) => {
            console.log("Error", err)
            loading.value = false;
        });
        // orderStore.loadOrderItem(response); 
    };
    const findOrder = async (dto: IOrderItem) => {};//TODO CHANGE CATEGORY DTOS
    const createOrder = async (payload: IOrderItem) => { };
    const updateOrder = async (id: string | number, payload: any) => { };
    const deleteOrder = async (id: string | number) => { };

    return {
        data,
        limit,
        loading,
        totalResults,
        nextPageUrl,
        prevPageUrl,

        //(functions)
        getAllOrders,
        findOrder,
        createOrder,
        updateOrder,
        deleteOrder,
    };
};
