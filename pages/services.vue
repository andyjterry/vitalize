<template>
    <div class="bg-gray-900">
      <main>
        <div class="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-white ">Our Packages</h1>
            <p class="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-gray-300">
    Whether you're starting fresh or refining your brand, our specialised plans are designed to meet your specific needs. Discover our tailored packages for web development, branding, and more. Each crafted to propel your business to new heights.
  </p>
          </div>
          <div v-if="plans.length" class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <!-- plans -->
            <div v-for="plan in plans"  :key="plan.name" class="rounded-3xl p-8 xl:p-10 ring-1 ring-white/10">
              <h2 class="text-lg font-semibold leading-8 text-white">{{ plan.name }}</h2>
              <p class="mt-4 text-sm leading-6 text-gray-300">
                <b>Ideal For:</b> {{ plan.idealFor }}
              </p>
              <div class="flex flex-row justify-between items-end">
              <div class="flex flex-col">
                <p class="text-sm font-semibold leading-6 text-gray-300">from</p>
                <p class="text-4xl font-bold tracking-tight text-white">£{{ plan.initialCost }}</p>                
              </div>
              <div v-if="plan.monthlyCost.length">
                
                <p class="flex items-baseline gap-x-1">
                  <span class="text-sm font-semibold leading-6 text-gray-300">then only </span>
                <span class="text-2xl font-bold tracking-tight text-white">£{{ plan.monthlyCost }}</span>
                <span class="text-sm font-semibold leading-6 text-gray-300">per month</span>
              </p>
            </div>
            <div v-else>
            </div>
                <br/><br /><br/>
            </div>
              <a href="#" class="mt-6 block rounded-md bg-white/10 text-white hover:bg-white/20 py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Get Started</a>
              <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                <li v-for="feature in plan.features" :key="feature" class="flex gap-x-3">
                  <CheckIcon class="h-6 w-5 flex-none text-white" aria-hidden="true" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-12 mx-auto max-w-6xl small-print">
  <p>*Web Hosting and Maintenance: Includes hosting, regular updates, and security checks to ensure your website runs smoothly.</p>
  <p>*Content Updates: Limited to basic text and image changes on existing pages, ensuring your content remains fresh and up-to-date.</p>
  <p class="mt-4">All packages require a commitment period. Early termination may incur fees, including the balance of the contracted service period. Detailed terms will be provided upon service agreement.</p>
</div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { CheckIcon } from '@heroicons/vue/20/solid';
  
  const plans = ref([
    {
      name: 'New Brand Launch',
      idealFor: 'New businesses seeking a comprehensive solution to launch both their online and offline presence with a cohesive brand identity. Perfect for entrepreneurs looking for an all-in-one package to hit the ground running.',
      initialCost: '849',
      monthlyCost: '49',
      features: [
        'Professional Logo Design',
        'Brand Guidelines',
        'Brand Personality Development',
        '1000 Business Cards, 2000 Flyers',
        'Website Development (5-7 Pages)',
        'Web Hosting and Maintenance*',
        'Basic SEO Setup',
        'Content Updates*',
      ],
    },
    {
  name: 'Digital Presence Starter',
  idealFor: 'Small businesses or startups focusing on establishing a strong online presence. This package suits those who may already have their branding in place but need a professional, user-friendly website to showcase their services or products.',
  initialCost: '599',
  monthlyCost: '39',
  features: [
    'Static Website Design and Development (Up to 5 Pages)',
    'Basic SEO Setup',
    'Social Media Integration',
    'Web Hosting and Basic Maintenance',
    'Limited Monthly Content Updates',
  ],
},
{
  name: 'Brand Identity Foundation',
  idealFor: 'Businesses looking to establish or refresh their brand identity. Suitable for those who value cohesive, professional branding across all customer touchpoints and are looking to lay a solid foundation for future marketing efforts.',
  initialCost: '499',
  monthlyCost: '',
  features: [
    'Professional Logo Design',
    'Brand Guidelines Document',
    'Brand Personality Consultation',
    'Design of 1000 Business Cards and 2000 Flyers',
  ],
}
    // Add more plans here following the same structure
  ]);
  </script>

  <style scoped>
  .small-print {
  @apply text-sm text-gray-300; 
  p {
    @apply text-xs text-center;
  }
  }
  </style>
  