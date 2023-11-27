<script lang="ts" setup>

// @ts-nocheck
import { logo_light, logo_dark } from "@@/constants/assets.ts"
import { useDark } from '@vueuse/core'
import { computed } from "vue";

type Size = 'auto' | 'lg'
const props = defineProps<{
    size?: Size
}>()

const isDark = useDark();

const size = computed(() => {
    if (props.size == 'lg') {
        return 'w-[200px]'
    }
    return 'w-[100px] w-auto object-cover my-2'
});

const { data } = useSettings()

</script>
<template>
    <ClientOnly>
        <img v-if="isDark" :src="  logo_dark" :class="size" alt="company logo" />
        <img v-else :class="size" :src="logo_light" alt="company logo" />
    </ClientOnly>
</template>