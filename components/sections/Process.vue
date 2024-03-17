
<template>
  <div v-if="steps.length" class="light py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl lg:mx-0">
        <h2>Your Digital Journey</h2>
        <p class="mt-6">Starting a website or branding project should be straightforward and rewarding. At Brand Badger, we've simplified our process into six straightforward steps to keep things as clear and efficient as possible. We focus on open communication and real collaboration, ensuring the end result is exactly what you need. We're here to turn your vision into a digital reality, step by step. Ready to boost your business online? Let's get started.</p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div v-for="step in steps" :key="step.name">
          <span class="absolute">
            <span class="absolute text-red-500/20 text-7xl font-bold -mt-6">{{ step.id }}</span>
          </span>
          
          <dt class="font-semibold text-gray-900 ml-12 mb-4">{{ step.name }}</dt>
          <dd class="mt-1 text-gray-600">{{ step.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
  
<script setup>
import details from '~/data/details.json';

const steps = details.steps;
</script>