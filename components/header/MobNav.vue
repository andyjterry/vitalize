<template>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
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
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 bg-gray-100/95 block rounded-lg px-3 py-2 text-2xl text-center font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
</template>
    