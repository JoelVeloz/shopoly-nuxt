<script setup lang="ts">
import { computed } from 'vue';

type ButtonType =  'primary' | 'secondary' | 'tertiary'
const props = defineProps<{
    type?: ButtonType
}>();
const buttontheme = computed(()=> {
    if(props.type ==='primary') {
        return "bg-amber-400 px-4 hover:bg-yellow-300 text-black dark:text-amber-800"
    }
    if(props.type ==='secondary') {
        return "bg-violet-900 px-4 hover:bg-violet-800 text-white active:bg-purple-900"
    }
    if(props.type ==='tertiary') {
        return "bg-amber-400 px-4 hover:bg-yellow-300 text-black dark:text-amber-800"
    }
    else {
        return "bg-amber-400 px-4 hover:bg-yellow-300 text-black dark:text-amber-800"
    }
})
</script>
<template>
    <button v-bind="$attrs" class="" 
    :class="buttontheme">
        <slot></slot>
    </button>
</template>