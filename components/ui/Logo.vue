<template>
  <div
    class="flex flex-row items-center text-3xl font-bold pt-2 pb-3 px-3 transition ease-in-out tracking-widest hover:rotate-0"
    :class="{
      '-rotate-3 shadow-md bg-dark drop-shadow rounded-xl text-light':
        isTypingComplete,
      'rotate-0 text-secondary': !isTypingComplete,
    }"
  >
    <!-- Static Logo (displayed if the animation has already been played) -->
    <span v-if="animationPlayed" v-html="fullLogoText"></span>

    <!-- Animated Logo (displayed if the animation has not been played) -->
    <span v-else v-html="displayLogo"></span>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";

const logoName = "brandBadger";
const fullLogoText = `<span class="text-orange-500">&lt;</span><span class="text-white">${logoName}  </span><span class="text-orange-500">/&gt;</span>`;
const displayLogo = ref(`&lt; /&gt;`); // Initial content for animation
const isTypingComplete = ref(false);
const animationPlayed = ref(false); // State to track if the animation was played

const speed = Math.floor(Math.random() * (250 - 100 + 1)) + 100;

const typeLogo = (text, index) => {
  if (index <= text.length) {
    const highlightedText = `<span class="text-orange-500">${text.substring(0, index)}</span>`;
    displayLogo.value = `&lt;${highlightedText}/&gt;`;
    setTimeout(() => typeLogo(text, index + 1), speed);
  } else {
    isTypingComplete.value = true;
    sessionStorage.setItem("animationPlayed", "true");
  }
};

onMounted(() => {
  if (sessionStorage.getItem("animationPlayed")) {
    animationPlayed.value = true;
    isTypingComplete.value = true;
    displayLogo.value = fullLogoText; // Ensure displayLogo has full content for any logic relying on it
  } else {
    setTimeout(() => {
      typeLogo(logoName, 1);
    }, 2000); // Delay to start typing animation
  }
});
</script>
  
<style>
/* Your existing styles (if any) */
</style>
