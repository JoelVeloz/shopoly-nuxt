<script setup lang="ts">
import { ILink } from "@@/interfaces/ILink.ts";

defineProps<{
    title?: string,
    links: (ILink)[]
}>();
</script>
<template>
    <div class="mx-5 mt-10">
        <p class="font-medium text-gray-500 uppercase">{{ title ?? 'Links' }}</p>
        <ul class="text-sm leading-8">
            <li v-for="(link, index) of links" :key="`${title}-${link}-${index}`"><NuxtLink :to="link.route">
                    {{ link.name }}</NuxtLink></li>

        </ul>
    </div>
</template>