<template>
    <div class="bg-white mt-16">
      <div class="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 class="sr-only">Products</h2>
        <h2 class="text-3xl mb-5 ml-2 font-extrabold">Products</h2>
        <div class="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-6">
          <div v-for="product in products" :key="product.id" class="group p-4 sm:p-6 relative">
            <a :href="product.href" class="text-xs">
              <div :style="getProductStyles(product.bgColour)" class="relative shadow-lg hover:shadow-non scale-100 hover:scale-105 duration-300 cursor-pointer ease-in-out aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                <p class="price-placing" :style="{ background: getDarkerColor(product.textColour) }">{{ product.price }}</p>
                <h3 :style="{ color: getDarkerColor(product.bgColour) }" class="text-xs font-bold absolute top-1.5 left-2">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ product.name }}
                </h3>
                <img :src="product.imageSrc" :alt="product.imageAlt" class="mt-10 h-full w-full object-cover object-center" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import productsData from '@/data/products.json'
  
  const products = ref(productsData)
  
  const getProductStyles = (bgColour) => {
    return {
      backgroundColor: bgColour,
    }
  }
  
  const getDarkerColor = (color) => {
    const colors = {
      '#A1DED4': '#4D9B8D',
      '#B8D0EB': '#6D89B0',
      '#FAD1D3': '#C97578',
      '#E8E2B6': '#A89B48',
      '#EBC3D8': '#AD6F85',
      '#F6D5D1': '#C9887D',
    }
    return colors[color] || '#000'
  }
  </script>
  
  <style scoped>
  .price-placing {
    position: absolute;
    bottom: -5px;
    right: -5px;
  
    @apply shadow-md text-base font-medium rounded-full p-2 text-white;
  }
  </style>
  