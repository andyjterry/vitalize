<template>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 text-light">
      <div class="relative isolate overflow-hidden bg-dark px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <h2 class="mx-auto text-3xl font-bold tracking-tight  sm:text-4xl">
          {{ title }}
        </h2>
        <p class="mx-auto mt-6 max-w-3xl text-lg leading-8">
          {{ text }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <UiButton v-for="button in buttons" :key="button.label" :label="button.label" size="md" url="test" colour="secondary" target="_blank" />
        </div>
      </div>
    </div>

</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  text: String,
  buttons: Array,
});
</script>
