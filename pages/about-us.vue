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
                        <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ person.name }}</h3>
                        <p class="text-base leading-7 text-gray-600">{{ person.role }}</p>
                        <p class="mt-6 text-base leading-7 text-gray-600">{{ person.bio }}</p>
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
  { label: 'Websites Launched', value: '250+' },
  { label: 'Happy Clients', value: '150+' },
  { label: 'Branding Projects', value: '100+' },
  { label: 'Years of Experience', value: '5+' }
]

  const values = [
    {
      name: 'Be world-class',
      description:
        'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
    },
    {
      name: 'Share everything you know',
      description:
        'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
    },
    {
      name: 'Always learning',
      description:
        'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
    },
    {
      name: 'Be supportive',
      description:
        'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
    },
    {
      name: 'Take responsibility',
      description:
        'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
    },
    {
      name: 'Enjoy downtime',
      description:
        'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
    },
  ]
const people = [
    {
        name: 'Andy Terry',
        role: 'Developer / Designer / Co-Founder',
        imageUrl: 'https://scontent.fman2-2.fna.fbcdn.net/v/t39.30808-6/347231099_7543022469094831_3545115610667272054_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=25drA_TgopQAX8-UVhd&_nc_ht=scontent.fman2-2.fna&oh=00_AfBYZt3TduiLhjDNC9l-U93tr8MlwhEbyUVe225uENidKg&oe=65F7C499',
        bio: 'I am a front-end developer with a strong background in design. In addition to my technical expertise, I have a passion for helping businesses improve their online presence.',
    },
    {
        name: 'Paige Heneghan',
        role: 'Co-Founder / Admin / HR / Sales',
        imageUrl: 'https://scontent.fman2-1.fna.fbcdn.net/v/t1.6435-9/47360186_2255498424727307_7988958711831855104_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=25tG1gOzQ8oAX_QvIMX&_nc_oc=AQn-qHjSl7fRKI6ql5RQKdKC3__APoCTZcJcSGzyltU0HrcZim7q4UG8Y_u_U4y-gQI&_nc_ht=scontent.fman2-1.fna&oh=00_AfBWwBjho0MHZip63i-jQ76x-jMai7hxF6zMmsqzDTWXyw&oe=661B189A',
        bio: 'Paige is a versatile professional with experience in various roles. She is passionate about delivering exceptional service to clients and has a keen interest in singing and traveling.',
    },
    // More people...
];
</script>
```
