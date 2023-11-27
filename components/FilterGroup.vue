<script setup lang="ts">
import BaseCheckbox from "@components/BaseCheckbox.vue";
import { type IFilter } from "@/interfaces/IFilter";
import { isCategoryFilter } from "@/interfaces/ICategoryFilter";
import { isPriceFilter } from "@/interfaces/IPriceFilter";
import { isAttributeFilter } from "@/interfaces/IAttributeFilter";
import { isColorFilter } from "@/interfaces/IColorFilter";
const props = defineProps<{
    filter: IFilter
}>()

const {getItemsByCategory, getAllItems} = useItem();
const selected = ref(null);

const getCurrencySymbol = () => {
    if (isPriceFilter(props.filter)) {
        switch (props.filter.currency) {
            case "dollar":
                return '$';
            case "euro":
                return '€';
            case "cop":
                return 'COP';

        }
    }
}

watch(selected, (newSel)=> {
    if(newSel != null) {
        getItemsByCategory(newSel?.id)
    }
    else {
        getAllItems()
    }

})

onUnmounted(()=> {
    getAllItems()
})
</script>
<template>
    <div class="w-full" v-if="isCategoryFilter(filter)">
        <p class="mb-3 font-medium uppercase">{{ filter.title }} </p>
       
        <USelectMenu v-model="selected" :options="[...filter.keywords]" option-attribute="key" >
            <template #label>
                {{ selected?.key ?? 'Todas' }}
            </template>   
        </USelectMenu>
        <!-- <div v-for="(keyword, index) in filter.keywords" class="flex w-full justify-between">
            <BaseCheckbox :key="`${filter.title}-${keyword.key}-${index}`" :total="keyword.results" >
                {{ keyword.key }}
            </BaseCheckbox>
        </div> -->

    </div>
    <div class="w-full" v-if="isPriceFilter(filter)">
        <p class="mb-3 font-medium uppercase">{{ filter.title }}</p>

        <div class="flex w-full">
            <div class="flex justify-between items-center">
                <span class="mr-3 font-bold text-2xl">
                    {{ getCurrencySymbol() }}
                </span>
                <input x-mask="99999" class="h-8 w-[90px] border pl-2" placeholder="50" />
                <span class="px-3">-</span>
                <input x-mask="999999" class="h-8 w-[90px] border pl-2" placeholder="99999" />
            </div>
        </div>
    </div>

    <div class="w-full" v-if="isAttributeFilter(filter)">
        <p class="mb-3 font-medium uppercase">{{ filter.title }}</p>

        <div class="flex gap-2">
            <div v-for="keyword in filter.keywords" :key="`${filter.title}-${keyword}`"
                class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                {{ keyword }}
            </div>
          
        </div>
    </div>

    <div class="w-full" v-if="isColorFilter(filter)">
        <p class="mb-3 font-medium uppercase">{{ filter.title }}</p>

        <div class="flex gap-2">
            <div v-for="keyword in filter.keywords" :key="`${filter.title}-${keyword}`"
                :class="`bg-['${keyword.toLowerCase()}']`"
                class="h-8 w-8 cursor-pointer border border-white bg-gray-600 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                :style="{
                    backgroundColor: keyword.toLowerCase()
                }"
                >
                
            </div>
        </div>
    </div>
</template>