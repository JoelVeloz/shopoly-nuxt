<script setup lang="ts">
// @ts-nocheck

import { product_detailp, kitchenp, mattrassp, bedroomp, product_chairp, product_sofap } from '@@/constants/assets';
import { IProduct } from '@@/interfaces/IProduct';
import { SplideTrack, Splide, SplideSlide } from "@splidejs/vue-splide"
import ProductCard from '@components/ProductCard.vue';
import { useItem } from '@@/composables/useItem';

const newArrivals: (IProduct)[] = [
  {
    image: product_detailp,
    name: 'Guyer Chair',
    price: 500.00,
    discount: 455.00,
    stars: 4,
    reviews: 38
  },
  {
    image: product_chairp,
    name: 'Purple Chair',
    price: 500.00,
    discount: 355.00,
    stars: 2,
    reviews: 58
  },
  {
    image: product_sofap,
    name: 'Large Sofa',
    price: 200.00,
    discount: 55.00,
    stars: 5,
    reviews: 92
  },
  {
    image: kitchenp,
    name: 'Perfecto Kitchen',
    price: 500.00,
    discount: 55.00,
    stars: 4,
    reviews: 158
  },
  {
    image: mattrassp,
    name: 'Matrass Comfort +',
    price: 80.00,
    discount: 5.00,
    stars: 5,
    reviews: 58
  },
  {
    image: bedroomp,
    name: 'Queen Size Bed',
    price: 500.00,
    discount: 355.00,
    stars: 3,
    reviews: 58
  }
]

const { data: productData, loading } = useItem();
const options = {
  type: "loop",
  focus: 0,
  gap: "1rem",
  perPage: 4,
  width: '100%',

  breakpoints: {
    640: {
      perPage: 2,
    },
    480: {
      perPage: 1,
    },
  },
}
</script>
<template>
  <section class="col-span-12 mx-auto max-w-[1200px] px-5 py-2" aria-label="Splide Basic HTML">
    <Splide  :has-track="false" :options="options">
      <SplideTrack class="mx-auto max-w-[1200px] ">
        <!-- 1 -->
        <SplideSlide   v-if="!loading" v-for="product in productData" :key="`${product.name}-${product.price}`">
          <ProductCard  :product="product" />
        </SplideSlide>


      </SplideTrack>
    </Splide>
  </section>
</template>