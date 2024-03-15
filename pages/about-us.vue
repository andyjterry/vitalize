<template>
    <div class="bg-white mt-20">
  
      <main class="isolate">
  
<!-- Content section -->
<div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
  <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
    <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
      <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
        <p class="text-xl leading-8 text-gray-600">Hey there, welcome to Brand Badger - your go-to digital crafters. Our journey began in [Year], nestled in the vibrant heart of [Location]. What started as a dream amongst a small bunch of tech and design enthusiasts has now flourished into a sanctuary for businesses big and small, crafting digital dreams into digital realities.</p>
        <div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
          <p>**Craftsmanship & Creativity**: At the core of Brand Badger is a marriage of technology and creativity. We don’t just code; we create. Staying ahead of the curve, we ensure your project shines in both functionality and aesthetics, mirroring your unique brand ethos.</p>
          <p class="mt-10">**Genuine Partnerships**: Forget transactions; we're all about meaningful connections. From day one to launch day and beyond, we walk you through each step, ensuring the end product is something we both are proud of. It's collaboration at its finest.</p>
          <p class="mt-10">**Bespoke Solutions**: Your business is unique, and your digital solutions should be too. Ditch the cookie-cutter approach for something that truly represents you, whether you're just starting or looking to spruce up your online presence.</p>
        </div>
      </div>
      <div class="lg:flex lg:flex-auto lg:justify-center">
        <dl class="w-64 space-y-8 xl:w-80">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col-reverse gap-y-4">
            <dt class="text-base leading-7 text-gray-600">{{ stat.label }}</dt>
            <dd class="text-5xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>

  
        <!-- Values section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
          </div>
          <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div v-for="value in values" :key="value.name">
              <dt class="font-semibold text-gray-900">{{ value.name }}</dt>
              <dd class="mt-1 text-gray-600">{{ value.description }}</dd>
            </div>
          </dl>
        </div>

    <div class="bg-white py-24 md:py-32">
        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
            <div class="max-w-2xl xl:col-span-2">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
            </div>
            <ul role="list" class="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
                <li v-for="person in people" :key="person.name" class="flex flex-col gap-10 pt-12 sm:flex-row">
                    <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" :src="person.imageUrl" :alt="'image of ' + person.name" />
                    <div class="max-w-xl flex-auto">
                        <h3 class="text-xl font-bold leading-8 tracking-tight text-gray-900">{{ person.name }}</h3>
                        <p class="text-xs text-orange-600">{{ person.businessRole }}</p>
                        <p class="text-base leading-7 font-semibold text-gray-800">{{ person.role }}</p>
                        <p class="mt-6 text-base leading-7 text-gray-700">{{ person.bio }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</main>
  

</div>
</template>

<script setup>
  import { defineComponent, h, ref } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const stats = [
    { label: 'Websites Launched', value: '300+' },
  { label: 'Branding Projects Completed', value: '120+' },
  { label: 'Satisfied Clients', value: '200+' },
  { label: 'Years Making Digital Beautiful', value: '7+' }
]

  const values = [
    {
    name: 'Innovation in Design',
    description: 'Pushing the boundaries of digital aesthetics to create stunning, user-friendly websites that stand out in the digital crowd.',
  },
  {
    name: 'Transparency First',
    description: 'Keeping you in the loop with clear communication from start to finish, ensuring the project aligns with your vision.',
  },
  {
    name: 'Continuous Growth',
    description: 'Evolving with the latest web technologies and design trends to keep your brand at the cutting edge.',
  },
  {
    name: 'Supportive Partnership',
    description: 'Fostering lasting relationships with our clients by being there when you need us, before, during, and after project completion.',
  },
  {
    name: 'Empowerment Through Education',
    description: 'Equipping you with the knowledge and tools to manage your digital presence effectively, empowering your team and your brand.',
  },
  {
    name: 'Balanced Creativity',
    description: 'Finding the perfect blend of creativity and functionality to ensure your website not only looks great but works great too.',
  },
  ]
  const people = ref([
  {
    name: 'Andy Terry',
    businessRole:'Managing Director',
    role: 'Front-End Developer & Designer',
    imageUrl: 'https://scontent.fman2-2.fna.fbcdn.net/v/t39.30808-6/347231099_7543022469094831_3545115610667272054_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=25drA_TgopQAX8-UVhd&_nc_ht=scontent.fman2-2.fna&oh=00_AfBYZt3TduiLhjDNC9l-U93tr8MlwhEbyUVe225uENidKg&oe=65F7C499', // Update with actual URL or keep a placeholder
    bio: 'With a blend of technical expertise and an eye for design, Andy drives Brand Badger\'s mission to create unique digital experiences that engage and inspire.',
  },
  {
    name: 'Paige Heneghan',
    businessRole:'Director',
    role: 'Business Operations & Client Relations',
    imageUrl: 'https://scontent.fman2-1.fna.fbcdn.net/v/t1.6435-9/47360186_2255498424727307_7988958711831855104_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=25tG1gOzQ8oAX_QvIMX&_nc_oc=AQn-qHjSl7fRKI6ql5RQKdKC3__APoCTZcJcSGzyltU0HrcZim7q4UG8Y_u_U4y-gQI&_nc_ht=scontent.fman2-1.fna&oh=00_AfBWwBjho0MHZip63i-jQ76x-jMai7hxF6zMmsqzDTWXyw&oe=661B189A', // Update with actual URL or keep a placeholder
    bio: 'Paige ensures smooth operations and fosters strong relationships with our clients, ensuring every project is a success from start to finish.',
  },
  // Add more team members here
]);
</script>