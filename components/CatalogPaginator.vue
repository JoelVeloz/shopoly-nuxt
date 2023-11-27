<script setup lang="ts">
import { useItem } from '@@/composables/useItem';
import { computed } from 'vue';

defineProps({
  pages: Number
})
const { nextPageUrl, prevPageUrl, page, getAllItems } = useItem();
const activeButton = computed(() => {
  return `text-white bg-violet-900 hover:bg-violet-900 dark:hover:bg-violet-700 
  dark:border-gray-700 dark:text-gray-50`
})

const disabledButton = computed(() => {
  return `text-black bg-gray-200 dark:text-white dark:bg-gray-900`
})
</script>
<template>
  <div class="flex gap-4 items-center">
    <!-- Help text -->
    <span class="text-sm text-gray-700 dark:text-gray-400">
      Página <span class="font-semibold text-gray-900 dark:text-white">{{ page }}</span> de <span
        class="font-semibold text-gray-900 dark:text-white">{{ pages }} </span>
    </span>
    <!-- Buttons -->
    <div class="inline-flex ">
      <button :disabled="prevPageUrl == null" @click="getAllItems(prevPageUrl)"
        :class="prevPageUrl == null ? disabledButton : activeButton" class="flex items-center justify-center px-3 h-8 text-sm font-medium 
               rounded-s-sm overflow-hidden
                ">
        <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4" />
        </svg>
        Anterior
      </button>
      <button :disabled="nextPageUrl == null" @click="getAllItems(nextPageUrl)"
        :class="nextPageUrl == null ? disabledButton : activeButton" class="flex items-center justify-center px-3 h-8 text-sm font-medium 
         rounded-e-sm">
        Siguiente
        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </button>
    </div>
  </div>
</template>
