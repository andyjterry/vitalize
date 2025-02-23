<template>
    <section class="hero bg-gray-900 text-white py-20">
      <div class="container mx-auto text-center">
        <h1 class="text-5xl font-bold mb-4">{{ title }}</h1>
        <img :src="image" alt="Vitamin Image" class="mx-auto my-4 w-1/3" />
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    image: String
  })
  </script>
  
  <style scoped>
  .hero {
    background-color: #1a202c;
  }
  </style>
  