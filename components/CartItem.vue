<script setup lang="ts">
import { imgplaceholder } from '@/constants/assets';
import { type IItem } from '@/interfaces/IItem';
import cartStore from '@@/stores/cartStore';
import BaseIcon from '@components/BaseIcon.vue';

defineProps<{
    order_item: IItem,
    edittable?: boolean
}>()
const { addItem, substractItem, removeItem } = cartStore();

const checkProductImage = (product: IItem) => {
    if (product?.files?.length > 0) {
        return product.files[0].url
    }
    else {
        return imgplaceholder
    }
}

const getSkuTitle = (order_it: IItem) => {
    if (order_it.skus.length > 0) {
        return order_it?.skus[0].title ?? 'Talla'
    }
    return "Unknown"
}

const getSkuKeywords = (order_it: IItem) => {
    if (order_it.skus.length > 0) {
        return order_it?.skus[0].keywords ?? 'Unknown'
    }
    return "Unknown"
}

const getTotalPrice = (order_it: IItem) => {
    if (order_it?.data?.count ) {
        let price;
        price = order_it?.price as number;
        if (typeof order_it?.price === 'string') {
            price = parseFloat(order_it.price);
        }

        return price * order_it.data.count;
    }
    return order_it.price
}
</script>
<template>
    <div class="md:hidden flex w-full border px-4 py-4">
        <img class="self-start object-contain" width="90px" :src="checkProductImage(order_item)" alt="Chair image" />
        <div class="ml-3 flex w-full flex-col justify-center">
            <div class="flex items-center justify-between">
                <p class="text-xl font-bold">{{ order_item.name }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path
                        d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
            </div>
            <p class="text-sm text-gray-400">{{ getSkuTitle(order_item) }}: {{ getSkuKeywords(order_item) }} </p>
            <p class="py-3 text-xl font-bold text-violet-900">${{ order_item.price }}</p>
            <div class="mt-2 flex w-full items-center justify-between">
                <div class="flex items-center justify-center">
                    <button @click="substractItem(order_item)" v-if="edittable ?? true"
                        class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                        &minus;
                    </button>
                    <div
                        class="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                        {{ order_item?.data?.count ?? 0 }}
                    </div>
                    <button @click="addItem(order_item)" v-if="edittable ?? true"
                        class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                        &#43;
                    </button>
                </div>

                <div class="text-red-500" @click="removeItem(order_item)" v-if="edittable ?? true">
                    <BaseIcon :icon="'trash'"></BaseIcon>

                </div>
            </div>
        </div>
    </div>

    <tr class="hidden md:table-row h-[100px] border-b last:border-none">
        <td class="align-middle">
            <div class="flex">
                <img class="w-[90px]" :src="checkProductImage(order_item)" alt="image" />
                <div class="ml-3 flex flex-col justify-center">
                    <p class="text-xl font-bold">{{ order_item.name }}</p>
                    <p class="text-sm text-gray-400">{{ getSkuTitle(order_item) }}: {{ getSkuKeywords(order_item) }}</p>
                </div>
            </div>
        </td>
        <td class="mx-auto text-center">&#36;{{ order_item.price }}</td>
        <td class="align-middle">
            <div class="flex items-center justify-center">
                <button @click="substractItem(order_item)" v-if="edittable ?? true"
                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                    &minus;
                </button>
                <div class="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                    {{ order_item?.data?.count ?? 0 }}
                </div>
                <button @click="addItem(order_item)" v-if="edittable ?? true"
                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                    &#43;
                </button>
            </div>
        </td>
        <td class="mx-auto text-center">&#36;{{ getTotalPrice(order_item) }}</td>
        <td class="align-middle m-0 cursor-pointer text-red-500" @click="removeItem(order_item)" v-if="edittable ?? true">
            <BaseIcon :icon="'trash'" />
        </td>
    </tr>
</template>