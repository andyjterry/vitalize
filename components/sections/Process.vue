
<template>
  <div v-if="steps.length" class="bg-light py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Digital Journey Simplified</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Embarking on the creation of your new website should be exciting, not daunting. At brandbadger, we've streamlined the process into six easy steps, ensuring transparency, collaboration, and satisfaction from start to finish. Discover how we transform your ideas into digital success stories, one step at a time. Ready to see your business thrive online? Let’s dive in.</p>
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