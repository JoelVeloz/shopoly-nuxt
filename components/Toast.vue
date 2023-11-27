<script setup lang="ts">
import { TransitionPresets, useTransition } from '@vueuse/core'

import { computed } from 'vue';
import { onMounted, ref } from 'vue';

const source = ref<number>(100);

const output = useTransition(source, {
  duration: 2000,
  transition: TransitionPresets.easeOutSine,
})

const props = defineProps({
    alertType: {
       validator(value: string) {
        return ['success', 'error', 'alert'].includes(value);
       }
    }
});

const caseText = computed(() => {
    switch(props.alertType) {
        case 'success':
            return 'Producto añadido al carrito';
        case 'error':
            return 'Ha ocurrido un error. Por favor, recargue la página.';
        default:
            return 'Advertencia, la siguiente acción es insegura'
    }
})

const borderColor = computed(() => {
    switch(props.alertType) {
        case 'success':
            return 'border border-green-600';
        case 'error':
            return 'border border-red-600';
        default:
            return 'border border-amber-600'
    }
})
const toastThemeColor = computed(() => {
    switch(props.alertType) {
        case 'success':
            return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
        case 'error':
            return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
        default:
            return 'bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100'
    }
})
const toastIconColor = computed(() => {
    switch(props.alertType) {
        case 'success':
            return 'bg-green-800 text-green-500';
        case 'error':
            return 'bg-red-800 text-red-500';
        default:
            return 'bg-amber-800 text-amber-500'
    }
})

const progressMainColor = computed(() => {
    switch(props.alertType) {
        case 'success':
            return 'bg-green-200 dark:bg-green-700';
        case 'error':
            return 'bg-red-200 dark:bg-red-700';
        default:
            return 'bg-amber-200 dark:bg-amber-700'
    }
})

const progressFillColor = computed(() => {
    switch(props.alertType) {
        case 'success':
            return 'bg-green-600 dark:bg-green-300';
        case 'error':
            return 'bg-red-600 dark:bg-red-300';
        default:
            return 'bg-amber-600 dark:bg-amber-300'
    }
})

onMounted(()=>{
    source.value = 0;
})
</script>

<template>
    <div v-if="output > 1" class="flex flex-col gap-0 mb-2 overflow-hidden rounded-sm shadow cursor-pointer" :class="borderColor">
        <div class="w-full max-w-xs  h-2.5" :class="progressMainColor">
            <div class="h-2.5 " :class="progressFillColor" :style="`width: ${output}%`"></div>
        </div>
        <div id="toast-success"
        :class="toastThemeColor"
            class=" flex items-center w-full max-w-xs p-2 "
            role="alert">


            <div
                :class="toastIconColor"
                class="inline-flex items-center justify-center 
                flex-shrink-0 w-8 h-8 
                rounded-lg">
                <svg
                v-if="alertType == 'success'" class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                
                <svg v-else-if="alertType=='alert'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>



                <span class="sr-only">Visto Bueno</span>
            </div>
            <div class="m-3 text-sm font-medium" >
                {{ caseText }}
            </div>
           
        </div>
    </div>
</template>
