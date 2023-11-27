<script setup lang="ts">
import TheBreadcrumbs from '@/components/compositions/TheBreadcrumbs.vue';
import CartItem from '@/components/CartItem.vue';
import OrderSummary from '@/components/compositions/OrderSummary.vue';
import cartStore from '@/stores/cartStore';
import { storeToRefs } from 'pinia';

const { totalItems } = cartStore();
const { items: cartData } = storeToRefs(cartStore());


definePageMeta({
  layout: 'app'
})
</script>
<template>
  <TheBreadcrumbs class="col-span-12" />
  <section
    class="col-span-12 w-full container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
    <h2 class="mx-auto px-5 text-2xl font-bold md:hidden">
      Complete Address
    </h2>
    <!-- form  -->
    <section class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
      <table class="hidden lg:table">
        <thead class="h-16 bg-neutral-100 dark:bg-neutral-600">
          <tr>
            <th class="bg-neutral-600 dark:bg-neutral-100 text-white dark:text-neutral-800">ADDRESS</th>
            
            <th>PAYMENT METHOD</th>
            <th>ORDER REVIEW</th>
          </tr>
        </thead>
      </table>

      <div class="py-5">
        <form class="flex w-full flex-col gap-3" action="">
          <div class="flex w-full justify-between gap-2">
            <div class="flex w-1/2 flex-col">
              <label class="flex" for="name">Full Name<span
                  class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span></label>
              <input class="w-full border px-4 py-2 outline-yellow-400" type="text" placeholder="Sarah Johnson" />
            </div>

            <div class="flex w-1/2 flex-col">
              <label class="flex" for="name">Email Address<span
                  class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span></label>
              <input class="w-full border px-4 py-2 outline-yellow-400" type="text" placeholder="sarahj@maybell.com"
                name="" id="" />
            </div>
          </div>

          <div class="flex w-full justify-between gap-2">
            <div class="flex w-1/2 flex-col">
              <label class="flex" for="name">Street<span
                  class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span></label>
              <input class="w-full border px-4 py-2 outline-yellow-400" type="text"
                placeholder="Big Serbian avenue, 18" />
            </div>

            <div class="flex w-1/2 flex-col">
              <label class="flex" for="name">City<span
                  class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span></label>
              <input class="w-full border px-4 py-2 outline-yellow-400" type="text" placeholder="Belgrade" name=""
                id="" />
            </div>
          </div>

          <div class="flex w-full justify-between gap-2">
            <div class="flex w-1/2 flex-col">
              <label class="flex" for="name">ZIP code<span
                  class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span></label>
              <input x-mask="999999" class="w-full border px-4 py-2 outline-yellow-400" placeholder="176356" />
            </div>

            <div class="flex w-1/2 flex-col">
              <label class="flex" for="name">Recipient<span
                  class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span></label>
              <input class="w-full border px-4 py-2 outline-yellow-400" type="text" placeholder="Andrew Johnson" name=""
                id="" />
            </div>
          </div>

          <div class="flex flex-col">
            <label for="">Commentary</label>
            <textarea class="border px-4 py-2 outline-yellow-400" type="text"></textarea>
          </div>
        </form>
      </div>

      <div class="flex w-full items-center justify-between">
        <NuxtLink href="/catalog" class="text-sm text-violet-900 dark:text-violet-500">&larr; Volver</NuxtLink>

        <NuxtLink href="/cart/payment">
          <BaseButton class="px-4 py-2">Realizar Orden</BaseButton>
        </NuxtLink>

      </div>
    </section>

    <!-- Summary  -->

    <section class="mx-auto w-full px-4 md:max-w-[400px]">
      <OrderSummary :items="cartData" />
    </section>
  </section>
</template>