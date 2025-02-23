<template>
    <section class="details py-20 bg-white">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-4">Why You Need This Vitamin</h2>
        <p class="text-lg mb-8">{{ vitamin.whyYouNeed }}</p>
  
        <h3 class="text-3xl font-bold mb-4">Benefits</h3>
        <ul class="list-disc list-inside mb-8">
          <li v-for="benefit in vitamin.benefits" :key="benefit" class="text-lg">{{ benefit }}</li>
        </ul>
  
        <h3 class="text-3xl font-bold mb-4">Who Needs This Vitamin?</h3>
        <ul class="list-disc list-inside mb-8">
          <li v-for="person in vitamin.whoNeeds" :key="person" class="text-lg">{{ person }}</li>
        </ul>
  
        <h3 class="text-3xl font-bold mb-4">Price</h3>
        <p class="text-lg mb-8">{{ vitamin.price }}</p>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({
    vitamin: Object
  })
  </script>
  