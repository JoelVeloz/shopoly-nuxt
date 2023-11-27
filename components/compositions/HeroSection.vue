<script setup lang="ts">
import BaseHero from '@components/BaseHero.vue';
import { header_bg } from '@@/constants/assets'
import BaseButton from '@components/BaseButton.vue';
import { computed } from 'vue';

const props = defineProps<{
    title?: string,
    subtitle?: string,
    action?: string,
    alignment?: string,
    image?: any
}>()

const titleAlignment = computed(() => {
    switch (props.alignment) {
        case 'center':
        return 'lg:text-center';
        default:
            return 'lg:text-left'
    }

})

const textAlignment = computed(() => {
    switch (props.alignment) {
        case 'center':
            return 'lg:text-center mx-auto';
        default:
            return 'lg:text-left';
    }

})


const actionAlignment = computed(() => {
    switch (props.alignment) {
        case 'center':
            return 'mx-auto lg:mx-auto';
        default:
            return 'mx-auto lg:mx-0';
    }

})
</script>
<template>
    <BaseHero :image="image ?? header_bg">
        <h1 class="text-4xl font-bold sm:text-5xl" :class="titleAlignment">
            {{ title ?? 'Los mejores diseños para tu hogar' }}
        </h1>
        <p class="pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-base" :class="textAlignment">
            {{ subtitle ?? `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
            aperiam natus, nulla, obcaecati nesciunt, itaque adipisci earum
            ducimus pariatur eaque labore.` }}
        </p>
        <BaseButton v-if="action?.includes('redirect') ?? false"
            class="mt-5 w-1/2 py-1 duration-100 lg:h-10 lg:w-2/12 lg:px-10"
            :class="actionAlignment">
            Comprar Ya
        </BaseButton>
    </BaseHero>
</template>
