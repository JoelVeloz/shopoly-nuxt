<script setup lang="ts">
defineProps<{
    isTextArea?: boolean
}>()
</script>
<template>
    <input v-bind="$attrs" v-if="!isTextArea" class="border px-4 py-2" type="email" placeholder="E-mail" />
    <textarea v-else v-bind="$attrs" class="border px-4 py-2" placeholder="Write a commentary..." name="" id=""></textarea>
</template>