<script setup lang="ts">
defineProps<{
  options: (Record<'value' | 'text', string>)[]
}>()
</script>
<template>
  <select v-bind="$attrs" class="mb-3 w-full border px-4 py-2" name="pets" id="pet-select">
    <!-- "" for the default value -->
    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>

  </select>
</template>