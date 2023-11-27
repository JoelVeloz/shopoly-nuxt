<script setup>
import CartItem from '../CartItem.vue';
const props = defineProps(['total-items', 'cart-data', 'edittable'])
</script>
<template>
     <!-- Mobile cart table  -->
     <section
          class="container mx-auto my-3 flex w-full flex-col gap-3 px-4 md:hidden"
        >
         
          <CartItem :edittable="edittable" v-for="item in cartData" :key="`${item.name}-${item.skus}`" :order_item="item"/>
        </section>
        <!-- /Mobile cart table  -->

        <!-- Desktop cart table  -->
        <section
          class="hidden h-[600px] w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 md:grid"
        >
          <table class="table-fixed">
            <thead class="h-16 bg-neutral-100 dark:bg-gray-800">
              <tr>
                <th class="text-left pl-6">ITEM {{ edittable }}</th>
                <th>PRECIO</th>
                <th>CANTIDAD</th>
                <th>TOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <!-- 1 -->
              <div v-if="cartData.length < 1" class="my-12 px-6">
              No hay items todavia
              </div>
              <CartItem :edittable="edittable" v-for="item in cartData" :key="`lg-${totalItems}`" :order_item="item" />

             
            </tbody>
          </table>
        </section>
        <!-- /Desktop cart table  -->
</template>
