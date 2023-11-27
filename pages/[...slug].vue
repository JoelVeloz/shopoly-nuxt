<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import { patrick } from "@/constants/assets";
</script>
<template>
    <div class="h-screen w-scree">
        <div class="mx-auto p-4 md:p-24 h-full flex flex-col gap-4 justify-center items-center text-center"> 
        <h1 class="my-12 text-4xl md:text-8xl font-medium" >Página no encontrada</h1>
        <img class="h-1/2 w-auto" :src="patrick" alt="Page Not Found Image">
        <p class="text-2xl md:text-4xl font-medium">Haz click aquí para volver</p>
        <router-link to="/" class="w-full md:w-1/3 h-16">
            <BaseButton :type="'secondary'" class="w-full h-full py-2">
            Volver
            </BaseButton>
        </router-link>
        
        </div>

    </div>
</template>