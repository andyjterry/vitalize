<template>
    <div class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
        <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
        <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We have worked with thousands of amazing people</p>
        </div>
        <div class="text-center mt-12">
          <a href="https://g.page/r/CRkB-jj1xVVXEBM/review" target="_blank" class="text-indigo-600 hover:underline">Loved our service? Leave us a review.</a>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{{ `“${featuredTestimonial.body}”` }}</p>
            </blockquote>
            <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img class="h-10 w-10 flex-none rounded-full bg-gray-50" :src="featuredTestimonial.author.imageUrl" alt="" />
              <div class="flex-auto">
                <div class="font-semibold">{{ featuredTestimonial.author.name }}</div>
                <div class="text-gray-600">{{ `@${featuredTestimonial.author.handle}` }}</div>
              </div>
              <img class="h-10 w-auto flex-none" :src="featuredTestimonial.author.logoUrl" alt="" />
            </figcaption>
          </figure>
          <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx" class="space-y-8 xl:contents xl:space-y-0">
            <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx" :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
              <figure v-for="testimonial in column" :key="testimonial.author.handle" class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                <blockquote class="text-gray-900">
                  <p>{{ `“${testimonial.body}”` }}</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                  <img class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                  <div>
                    <div class="font-semibold">{{ testimonial.author.name }}</div>
                    <div class="text-gray-600">{{ `@${testimonial.author.handle}` }}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const featuredTestimonial = {
    body: "Brand Badger transformed our online presence with a stunning, user-friendly website that truly represents our business ethos. Their attention to detail and dedication to understanding our needs made all the difference. Highly recommend for any UK businesses looking to elevate their digital strategy.",
  author: {
    name: 'Eleanor Pritchard',
    handle: 'eleanorpritchard',
      imageUrl:
        'http://chasesolar.org.uk/files/2022/02/blank-avatar-300x300.jpg',
      logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
    },
  }
  const testimonials = [
    [
      [
        {
          body: "The Brand Badger team went above and beyond. Their approach to our branding and website was straight forward and simple. The end result? A brand identity and online presence we're absolutely proud of. Great Job.",
    author: {
      name: 'Simon Hartley',
      handle: 'simonhartley',
      imageUrl:
              'http://chasesolar.org.uk/files/2022/02/blank-avatar-300x300.jpg',
          },
        },
        {
          body: "Working with Brand Badger has been a game-changer for our small business. Their personalized approach to our website design has dramatically increased our online engagement.",
    author: {
      name: 'Clara Oswald',
      handle: 'claraoswald',
      imageUrl:
              'http://chasesolar.org.uk/files/2022/02/blank-avatar-300x300.jpg',
          },
        },
      ],
      [
        {
          body: "Brand Badger didn't just deliver; they exceeded our expectations. Their commitment to excellence and understanding of the UK market has made our new website a key asset in our marketing toolkit.",
    author: {
      name: 'Miles Bron',
      handle: 'milesbron',
      imageUrl:
              'http://chasesolar.org.uk/files/2022/02/blank-avatar-300x300.jpg',
          },
        },
      ],
    ],
    [
      [
        {
          body: "Choosing Brand Badger for our website redesign was the best decision we've made. Their strategic approach resulted in a site that our customers love and has significantly boosted our online sales.",
    author: {
      name: 'Geoffrey Stinton',
      handle: 'geoffreystinton',
      imageUrl:
              'http://chasesolar.org.uk/files/2022/02/blank-avatar-300x300.jpg',
          },
        },
        // More testimonials...
      ],
      [
        {
          body: "Our experience with Brand Badger was nothing short of fantastic. Their dedication to crafting a site that truly represented our brand was clear from the start. The outcome speaks for itself.",
    author: {
      name: 'Louise Thompson',
      handle: 'louisethompson',
      imageUrl:
              'http://chasesolar.org.uk/files/2022/02/blank-avatar-300x300.jpg',
          },
        },
        {
          body: "The expertise and creative insight Brand Badger brought to our project was remarkable. Our website not only looks great but also performs excellently. A true partner in our growth.",
    author: {
      name: 'Fiona Gallagher',
      handle: 'fionagallagher',
            imageUrl:
              'http://chasesolar.org.uk/files/2022/02/blank-avatar-300x300.jpg',
          },
        },
      ],
    ],
  ]
  </script>