<template>
    <div class="bg-white mt-16">
      <div class="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 class="sr-only">Products</h2>
        <h2 class="text-3xl mb-5 ml-2 font-extrabold">Products</h2>
        <div class="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-6">
          <div v-for="product in products" :key="product.id" class="group p-4 sm:p-6 relative">
            <a :href="product.href" class="text-xs">
              <div :style="getProductStyles(product.bgColour)" class="relative shadow-lg hover:shadow-none duration-300 cursor-pointer ease-in-out aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
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
  const products = [
    {
      id: 1,
      name: 'Vitamin B12 Injection',
      price: '£29',
      description: 'Boosts energy levels, improves metabolism, and enhances brain function.',
      imageSrc: '/product/b12.png', // Ensure the path is correct relative to the public directory
      imageAlt: 'Vitamin B12 Injection',
      bgColour: '#A1DED4',
      textColour: '#4D9B8D',
      href: '#',
    },
    {
      id: 2,
      name: 'Vitamin C Injection',
      price: '£39',
      description: 'Enhances immune function, promotes skin health, and supports overall wellness.',
      imageSrc: '/product/vitamin_c.png',
      imageAlt: 'Vitamin C Injection',
      bgColour: '#B8D0EB',
      textColour: '#6D89B0',
      href: '#',
    },
    {
      id: 3,
      name: 'Vitamin D Injection',
      price: '£39',
      description: 'Supports bone health, boosts immune function, and improves mood.',
      imageSrc: '/product/vitamin_d.png',
      imageAlt: 'Vitamin D Injection',
      bgColour: '#FAD1D3',
      textColour: '#C97578',
      href: '#',
    },
    {
      id: 4,
      name: 'Biotin Injection',
      price: '£49',
      description: 'Supports healthy hair, skin, and nails, and aids in metabolizing fats and proteins.',
      imageSrc: '/product/biotin.png',
      imageAlt: 'Biotin Injection',
      bgColour: '#E8E2B6',
      textColour: '#A89B48',
      href: '#',
    },
    {
      id: 5,
      name: 'Magnesium Injection',
      price: '£39',
      description: 'Supports muscle function, reduces cramps, and enhances overall energy production.',
      imageSrc: '/product/magnesium.png',
      imageAlt: 'Magnesium Injection',
      bgColour: '#EBC3D8',
      textColour: '#AD6F85',
      href: '#',
    },
    {
      id: 6,
      name: 'Multivitamin Complex Injection',
      price: '£39',
      description: 'Combines essential vitamins to support overall health and well-being.',
      imageSrc: '/product/multivitamin.png',
      imageAlt: 'Multivitamin Complex Injection',
      bgColour: '#F6D5D1',
      textColour: '#C9887D',
      href: '#',
    },
  ]
  
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


    @apply shadow-md text-base font-medium rounded-full p-2 text-white
  }
  </style>
  