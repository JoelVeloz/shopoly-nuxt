<script setup lang="ts">
import BaseIcon from '@components/BaseIcon.vue';
import BaseButton from '@components/BaseButton.vue';
import { IItem } from "@@/interfaces/IItem";
import { imgplaceholder } from "@@/constants/assets.ts"
import cartStore from '@@/stores/cartStore';
import { Ref, inject } from 'vue';
defineProps<{
  product: IItem
}>()

const triggers = inject<Ref<string[]>>('triggers'); 

const {addItem} = cartStore();

const checkProductImage = (product: IItem) => {
  
  if (product?.files?.length > 0) {
    return product.files[0].url
  }
  else {
    return imgplaceholder
  }
}

const checkPriceType = (product: IItem) => {
  let price;
  if (typeof product.price === 'string') {
    price = parseFloat(product.price);
  }
  else {
    price = product.price
  }

  return price;
}

const checkDiscount = (product: IItem) => {
  let discount;
  if (product?.discount != null) {
    if (typeof product.discount === 'string') {
      discount = parseFloat(product.discount)
    }
    else {
      discount = product.discount
    }
  }
  else {
    discount = 0;
  }

  return discount;
}

const getDiscountPercent = (product: IItem) => {
  const price = checkPriceType(product);
  const discount = checkDiscount(product);
  return ((1 - ((price - discount) / price)) * 100).toFixed(0)

}

const getPrice = (product: IItem) => {
  const price = checkPriceType(product);
  const discount = checkDiscount(product)
  return (price - discount).toFixed(2)

}

</script>
<template>
  <div class="flex flex-col">
    <div class="relative flex h-60">
      <img  class="object-cover" :src="checkProductImage(product)" :alt="`${product.name} image`" />
      <div class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100">
        <NuxtLink to="/product-detail">
          <span class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
            <BaseIcon icon="search-alt" />
          </span>
        </NuxtLink>
        <!-- Add to Wishlist -->
        <!-- <span class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
          <BaseIcon icon="heart-filled" />
        </span> -->
      </div>

      <div class="absolute right-1 mt-3 flex items-center justify-center bg-amber-400">
        <p class="px-2 py-2 text-sm">&minus; {{ getDiscountPercent(product) }}&percnt; OFF</p>
      </div>
    </div>

    <div class="flex flex-col justify-between h-40">
      <p class="mt-2 text-black dark:text-white uppercase">{{ product.name }}</p>
      <p class="font-medium text-violet-900">
        <span>
          ${{ getPrice(product) }}
        </span>
        <span class="ml-1 text-sm text-gray-500 line-through">${{ checkPriceType(product).toFixed(2) }}</span>
      </p>

      <div class="flex items-center" v-if="product.stars">
        <BaseIcon icon="star-filled" v-for="star in product.stars" :key="`${product.name}-star-${star}`" />
        <BaseIcon icon="star-empty" v-for="star in (5 - product.stars)" :key="`${product.name}-emptystar-${star}`" />

        <p class="text-sm text-gray-400">({{ product.reviews }})</p>
      </div>
      <div>
        <BaseButton @click="addItem(product); triggers?.push('success')" type="secondary" class="my-5 h-10 w-full text-white">
          Añadir al carrito
        </BaseButton>
      </div>
    </div>
  </div>
</template>