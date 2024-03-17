<template>
   <div class="bg-light mx-auto transition duration-300 ease-in-out inter">
    <navigation></navigation>
    <slot />
    <app-footer></app-footer>
  </div>

</template>

<script>
import AppFooter from "@/components/footer/Footer.vue"
import Navigation from '@/components/header/Navigation.vue'

export default {
  components: {
    Navigation,
    AppFooter,
  },
};
</script>
