<template>
    <div class="overflow-hidden dark py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h4>Why Choose Us</h4>
              <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Crafting Unique Digital Experiences</p>
              <p class="my-6 text-lg leading-8">At Brand Badger, we're dedicated to building not just websites, but comprehensive digital experiences tailored to your brand's unique identity and goals. Discover the advantages of partnering with us.</p>

                <dl v-for="feature in features" :key="feature.name" class="relative flex flex-col mb-8 border-l-4 border-l-white pl-3 rounded">
                  <dt class="text-white mb-2">
                    {{ feature.name }}
                  </dt>
                  <dd>{{ feature.description }}</dd>
                </dl>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Brand Badger Work" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
        </div>
      </div>
    </div>
  </template>
  <script setup>


const features = [
  {
    name: 'Bespoke Design',
    description:
      'Every project is crafted from the ground up, tailored specifically to highlight your brand and meet your business needs.',
  },
  {
    name: 'Personalised Attention',
    description: 'Get my undivided attention on your project, ensuring it\'s perfectly aligned with your vision.',
  },
  {
    name: 'Partnership Approach',
    description: 'Your success is our priority. We work closely with you through each step of the project to exceed your expectations.',
  },
]
</script>
