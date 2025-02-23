<template>
  <div class="flex flex-col min-h-screen bg-light mx-auto transition duration-300 ease-in-out">
    <navigation></navigation>
    <slot />
    <!-- <app-footer></app-footer> -->
    <div class="md:hidden mt-auto p-4 bg-white shadow-md border-t-2 border-gray-100 bg-opacity-80 text-center fixed bottom-0 w-full">
      <a 
        target="_blank" 
        href="https://www.fresha.com/a/vitaman-prime-newcastle-upon-tyne-newcastle-upon-tyne-uk-5-charlotte-square-p4d8p3r0/all-offer?venue=true&pId=1296163" 
        class="block rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold scale-90 hover:scale-100 duration-300 ease-in-out text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
      >
        Book Now
      </a>
    </div>
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
