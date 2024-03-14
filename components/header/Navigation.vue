<template>
  <header class="absolute inset-x-0 top-0 z-50  bg-white/90 sticky top-0" style="">
    <nav
      class="mx-auto flex max-w-7xl md:max-w-none items-center justify-between px-2 py-6 sm:p-6 lg:px-8"
      aria-label="Global"
      style=" backdrop-filter: blur(2px);"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="">
          <span class="sr-only">brandbadger Logo</span>
          <logo />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center px-6 rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in mainNavigation"
          :key="item.name"
          :href="item.href"
          class="text-lg font-semibold leading-6 text-gray-700 hover:text-orange-500"
        >
          <span v-if="item.main">{{ item.name }}</span>
        </a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <UiButton label="Lets Talk" url="test" colour="secondary" size="lg" />
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 px-2 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        style="    transition: backdrop-filter 0.3s ease-in-out;   
    backdrop-filter: blur(2px);"
      >
        <div class="mx-auto flex max-w-7xl md:max-w-none items-center justify-between sm:p-6 lg:px-8">
          <a href="/" class="">
            <span class="sr-only">brandbadger Logo</span>
            <logo />
          </a>
          <button
            type="button"
            class="m-2.5 inline-flex items-center justify-center rounded-md  text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 mx-3 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-5 py-6">
              <a
                v-for="item in mobileNavigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 flex flex-col space-y-2 bg-white block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                <span v-if="item.main">{{ item.name }}</span>
                <span v-if="item.description" class="text-sm text-gray-500/70">{{ item.description }}</span>
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import Logo from "~/components/ui/Logo.vue";
import navigationData from "~/data/navigation.json";

const mobileMenuOpen = ref(false);
const mainNavigation = navigationData.navigation.filter((item) => item.main);
const mobileNavigation = navigationData.navigation.filter((item) => item.main && item.description);

</script>
