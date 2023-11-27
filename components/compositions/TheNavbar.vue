<script setup lang="ts">

// @ts-nocheck
import { onMounted, ref } from 'vue';
import { bed, sleep, outdoor, sofa, kitchen, food, bed_dark, sleep_dark, outdoor_dark, sofa_dark, kitchen_dark, food_dark, bedroomp } from '@@/constants/assets.ts'
import BaseIcon from '@components/BaseIcon.vue';
import BaseButton from '@components/BaseButton.vue';
import { type ILink } from '@/interfaces/ILink';
import { useCategory } from '@@/composables/useCategory';


const desktopMenuOpen = ref(false);
const { data:categoriesData, loading} = useCategory();
const activeCategory = ref<any>()

const navRoutes: Record<string, ILink> = {
    home: { route: "/", text: "Inicio" },
    catalog: { route: "/catalog", text: "Catálogo" },
    about: { route: "/about", text: "¿Quiénes Somos?" },
    contact: { route: "/contact", text: "Contacto" }

}


const categories = {
    "bedroomc": {
        icon: bed, 
        text: "Bedroom", 
        productlines: {
            "beds": { title: "Beds", products: ['Italian Bed', 'Queen-Size Bed', 'Wooden-Craft Bed', 'King-Size Bed'] },
            "lamps": { title: "Lamps", products: ['Italian Purple Lamp'] },
            "bedside_tables": { title: "Bedside Tables", products: ['Purple Table'] },
            "special": { title: "Special", products: ['Humidifier'] }
        }
    },
    "mattrassc": {
        icon: sleep, text: "Mattrass", productlines: {
            "hards": { title: "Hard", products: [] }

        }
    },
    "outdoorc": {
        icon: outdoor, text: "Outdoor", productlines: {
            "garden": { title: "Garden", products: [] }
        }
    },
    "sofac": {
        icon: sofa, text: "Sofa", productlines: {

            "sofa": { title: "Couches", products: [] }
        }
    },
    "kitchenc": {
        icon: kitchen, text: "Kitchen", productlines: {

            "utensils": { title: "Utensils", products: [] }
        }
    },
    "livingc": {
        icon: food,
        text: "Living Room",
        productlines: {

            "electric": { title: "Televisions", products: [] }
        }
    }

}

const isDarkMode = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

onMounted(() => {
    if (isDarkMode()) {
        categories['bedroomc']['icon'] = bed_dark
        categories['mattrassc']['icon'] = sleep_dark
        categories['kitchenc']['icon'] = kitchen_dark
        categories['livingc']['icon'] = food_dark
        categories['outdoorc']['icon'] = outdoor_dark
        categories['sofac']['icon'] = sofa_dark
    }
})
</script>
<template>
    <!-- Nav bar -->
    <!-- hidden on small devices -->

    <nav class="relative bg-violet-900 z-0 py-auto">
        <div class="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
            <BaseButton @click="desktopMenuOpen = !desktopMenuOpen"
                class="ml-5 flex h-full w-40 cursor-pointer items-center justify-center bg-amber-400">
                <div class="flex justify-around " href="#">
                    <BaseIcon dark-mode-class="text-black dark:text-amber-800" icon="hamburger" />
                    Categorías
                </div>
            </BaseButton>

            <div class="mx-7 flex gap-8 text-white">
                <NuxtLink v-for="(option, index) in navRoutes" :key="`${option.route}-${index}`"
                    @click="desktopMenuOpen = false"
                    class="font-light duration-100 hover:text-yellow-400 hover:underline" :to="option.route">
                    {{ option.text }}
                </NuxtLink>

            </div>

            <div class="ml-auto flex gap-4 px-5">
                
                <NuxtLink class="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    to="/login">Login</NuxtLink>

                <span class="text-white">&#124;</span>

                <NuxtLink class="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    to="/signup">Sign Up</NuxtLink>
            </div>
        </div>
    </nav>
    <!-- /Nav bar -->

    <!-- Menu  -->
    <section v-show="desktopMenuOpen"
        class="absolute left-0 right-0 z-10 w-full border-b border-r border-l bg-white dark:bg-slate-800 dark:border-slate-900">
        <div class="mx-auto flex max-w-[1200px] py-10">
            <div class="w-[300px] border-r">
                <ul class="px-5">
                    <li v-for="(category, index) in categoriesData" :key="`${category.name}-${index}`"
                        @click="activeCategory = index"
                        class="cursor-pointer active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 dark:hover:bg-neutral-600 active:bg-amber-400 dark:active:bg-amber-400"
                        :class="`${index === activeCategory ? 'bg-amber-400' : ''}`">
                        <img v-if="category.icon" :src="category.icon" alt="Bedroom icon" />
                        <img v-else :src="`${isDarkMode ? bed_dark : bed}`" alt="Bedroom icon" />
                        {{ category.name }} 
                        <span class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </li>


                </ul>
            </div>

            <!-- <div class="flex w-full justify-between">
                <div class="flex gap-6">
                    <div class="mx-5" v-for="(productline, index) in categories['bedroomc']['productlines']"
                        :key="`${productline}-${index}`">
                        <p class="font-medium text-gray-500 uppercase">{{ productline.title }}</p>
                        <ul class="text-sm leading-8">
                            <li v-for="(product, index) of productline?.products"
                                :key="`${productline}-${product}-${index}`">
                                <NuxtLink to="product-detail" @click="desktopMenuOpen = false">{{ product
                                }}</NuxtLink>
                            </li>

                        </ul>
                    </div>


                </div>
            </div> -->
        </div>
    </section>

    <!-- /Menu  -->
</template>