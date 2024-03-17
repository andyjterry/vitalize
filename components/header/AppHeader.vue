<template>
  <div class="bg-light sm:mb-20 sm:mt-0">
    <header>
      <div class="relative isolate">
          <intro-elements></intro-elements>
          <intro></intro>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "~/components/ui/Button.vue";
import Intro from "~/components/sections/Intro.vue";
import IntroElements from "~/components/elements/IntroElements.vue";
</script>



<style scoped>
.intro-text {
  @apply relative w-full md:max-w-xl lg:shrink-0 xl:max-w-2xl;
}
.intro-text h1 {
  @apply text-xl font-bold sm:text-5xl tracking-wider leading-8;
  /* line-height: 3.25rem; */
}

.intro-text p {
  @apply mt-6 text-lg sm:text-xl leading-6 md:leading-8 text-gray-800 sm:max-w-md lg:max-w-none;
}
</style>