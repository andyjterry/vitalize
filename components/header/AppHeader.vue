<template>
  <header>
    <!-- Your header content goes here -->

    <Intro />
    <intro-elements />n
  </header>
</template>

<script>
import IntroElements from "@/components/elements/introElements";
import Intro from "~/components/sections/Intro.vue";

export default {
  components: {
    IntroElements,
    Intro
  },
  // Your component's logic goes here
}
</script>

<style scoped>
/* Your component's styles go here */
</style>