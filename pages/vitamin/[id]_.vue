<template>
    <div v-if="vitamin" class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <!-- Vitamin details -->
        <div class="lg:max-w-lg lg:self-end">
          <div class="mt-4">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ vitamin.title }}</h1>
          </div>
  
          <section aria-labelledby="information-heading" class="mt-4">
            <h2 id="information-heading" class="sr-only">Vitamin information</h2>
  
            <div class="flex items-center">
              <p class="text-lg text-gray-900 sm:text-xl">{{ vitamin.price }}</p>
            </div>
  
            <div class="mt-4 space-y-6">
              <p class="text-base text-gray-500">{{ vitamin.whyYouNeed }}</p>
            </div>
          </section>
  
          <section aria-labelledby="benefits-heading" class="mt-4">
            <h2 id="benefits-heading" class="text-3xl font-bold text-gray-900">Benefits</h2>
            <ul class="list-disc list-inside mt-2">
              <li v-for="benefit in vitamin.benefits" :key="benefit" class="text-lg text-gray-500">{{ benefit }}</li>
            </ul>
          </section>
  
          <section aria-labelledby="who-needs-heading" class="mt-4">
            <h2 id="who-needs-heading" class="text-3xl font-bold text-gray-900">Who Needs This Vitamin?</h2>
            <ul class="list-disc list-inside mt-2">
              <li v-for="person in vitamin.whoNeeds" :key="person" class="text-lg text-gray-500">{{ person }}</li>
            </ul>
          </section>
  
          <div class="mt-6 flex items-center">
            <CheckIcon class="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
            <p class="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
          </div>
        </div>
  
        <!-- Vitamin image -->
        <div class="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img :src="vitamin.image" :alt="vitamin.title" class="h-full w-full object-cover object-center" />
          </div>
        </div>
  
        <!-- Add to cart section -->
        <div class="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" class="sr-only">Vitamin options</h2>
  
            <form>
              <div class="mt-10">
                <button type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Add to bag</button>
              </div>
              <div class="mt-6 text-center">
                <a href="#" class="group inline-flex text-base font-medium">
                  <ShieldCheckIcon class="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  <span class="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
                </a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-16">
      <p class="text-lg text-gray-500">Loading...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { CheckIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'
  
  const route = useRoute()
  const vitamin = ref(null)
  
  onMounted(async () => {
    try {
      const response = await fetch('/data/vitaman-page-data.json')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      vitamin.value = data.find(v => v.id === route.params.id)
    } catch (error) {
      console.error('Error fetching or setting vitamin data:', error)
    }
  })
  </script>
  
  <style scoped>
  /* Add any necessary scoped styles here */
  </style>
  