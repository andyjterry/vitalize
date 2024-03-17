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
import IntroElements from "../elements/introElements.vue"; // Updated import path
</script>


