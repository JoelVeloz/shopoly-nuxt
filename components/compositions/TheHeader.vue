<script setup lang="ts">
import BaseIcon from '@components/BaseIcon.vue';
import SearchBar from '@components/SearchBar.vue';
import CompanyLogo from '@components/CompanyLogo.vue';
import DarkModeButton from '@components/DarkModeButton.vue';

import { ref } from 'vue';
import { type ILink } from '@/interfaces/ILink';

const mobileMenuOpen = ref(false);
const headerRoutes: Record<string, ILink> = {
    // wishlist: { route: "/wishlist", icon: 'heart', name: "Wishlist" },
    cart: { route: "/cart", icon: 'cart', name: "Carrito" },
    // profile: { route: "/profile", icon: 'profile', name: "Account" }

}
const mobileRoutes: Record<string, ILink> = {
    home: { route: "/", name: "Inicio" },
    catalog: { route: "/catalog", name: "Catálogo" },
    about: { route: "/about", name: "¿Quiénes Somos?" },
    contact: { route: "/contact", name: "Contacto" }

}

</script>
<template>
    <!-- Header -->
    <header class="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5">
        <NuxtLink to="/">
            
            <CompanyLogo />

        </NuxtLink>

        <div class="md:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen">
                <BaseIcon icon="hamburger" />
            </button>
        </div>

        <SearchBar class="hidden w-2/5 md:flex" />
        <DarkModeButton/>
        <div class="hidden gap-3 md:!flex">
            
            <NuxtLink v-for="(option, index) in headerRoutes" :key="`${option.route}-${index}`" :to="option.route"
                class="relative flex cursor-pointer flex-col items-center justify-center">
                <span v-if="option.route === '/profile'" class="absolute bottom-[33px] right-1 flex h-2 w-2">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                </span>
                <BaseIcon :icon="option.icon ?? 'profile'" />


                <p class="text-xs">{{ option.name }}</p>
            </NuxtLink>
        </div>
    </header>
    <!-- /Header -->

    <!-- Burger menu  -->
    <section v-show="mobileMenuOpen"
        class="absolute left-0 right-0 z-50 h-screen w-full bg-white dark:bg-black text-black dark:text-white">
        <div class="mx-auto">
            <div class="mx-auto flex w-full justify-center gap-3 py-4">
                
                <NuxtLink v-for="(option, index) in headerRoutes" :key="`${option.route}-${index}`"
                    @click="mobileMenuOpen = false" :to="option.route"
                    class="relative flex cursor-pointer flex-col items-center justify-center">
                    <span v-if="option.route === '/profile'" class="absolute bottom-[33px] right-1 flex h-2 w-2">
                        <span
                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                        <span class="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                    </span>
                    <BaseIcon :icon="option.icon ?? 'profile'" />

                    <p class="text-xs">{{ option.name }}</p>
                </NuxtLink>
            </div>
            <SearchBar class="my-4 mx-5" />
            
            <ul class="text-center font-medium">
                <li v-for="(option, index) in mobileRoutes" @click="mobileMenuOpen = false"
                    :key="`${option.route}-${index}`" class="py-2">
                    <NuxtLink :to="option.route">{{ option.name }}</NuxtLink>
                </li>

            </ul>
        </div>
    </section>
<!-- /Burger menu  -->
</template>