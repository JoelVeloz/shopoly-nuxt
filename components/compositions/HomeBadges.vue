<script setup lang="ts">
import BaseIcon from '@components/BaseIcon.vue';
import { IBadge } from "@@/interfaces/IBadge.ts";

defineProps<{
  badges: IBadge[]
}>()
// const badges:(IBadge)[] = [
//   {
//     icon: 'truck',
//     title: 'Envío Gratis',
//     subtitle: 'En compras desde $20',
//   },

//   {
//     icon: 'money',
//     title: 'Ámalo o Cámbialo',
//     subtitle: 'Garantía de 30 días',

//   },

//   {
//     icon: 'help',
//     title: 'Soporte 24/7',
//     subtitle: 'Atención al Cliente',

//   }
// ]
</script>
<template>
  <!-- Cons bages -->
  <section class="col-span-12 container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row dark:text-white text-gray-950">
    <!-- 1 -->
    <div v-for="badge in badges" :key="`${badge.title}-${badge.subtitle}`"
      class="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5">
      <div class="text-indigo-600">
        <BaseIcon dark-mode-class="text-violet-900" :icon="badge.icon" />
      </div>

      <div class="ml-6 flex flex-col justify-center">
        <h3 class="text-left text-xs font-bold lg:text-sm">{{ badge.title }}</h3>
        <p class="text-light text-center text-xs lg:text-left lg:text-sm">
          {{ badge.subtitle }}
        </p>
      </div>
    </div>


  </section>
</template>