<template>
  <div class="overflow-hidden dark">
    <main>
      <!-- Content section -->
      <div class="mx-auto  max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8 py-12 sm:py-36">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-10">
            Our Story
          </h2>
          <p class="text-base sm:text-xl leading-8 mb-10">
            Welcome to Brand Badger, where our passion for digital
            craftsmanship turns your business vision into reality. Our story
            began in 2016 as Andy Terry Web and Design, a small venture
            driven by a love for web development and design. Over the years,
            we've evolved into a comprehensive branding and digital
            solutions provider, offering everything from logo design and
            website development to custom apparel and photography services.
          </p>
          <div class="sm:mt-6 flex flex-col gap-x-8 gap-y-10 lg:flex-row">
            <div class="lg:w-full lg:max-w-full lg:flex-auto ">

              <div
                class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <div>
                  <p class="font-bold mb-3 text-lg text-white">Blending Craftsmanship with Creativity</p>
                  <p>
                    At Brand Badger, we believe in more than just delivering
                    projects; we believe in crafting digital masterpieces. With
                    every line of code and design element, we aim to reflect the
                    uniqueness of your brand, ensuring that each project is not
                    only functional but also visually compelling.
                  </p>
                </div>
                <div>
                  <p class="font-bold mb-3 text-lg text-white">Building Genuine Partnerships</p>
                  <p>
                    Our journey with you is more than a series of transactions. It's about
                    building a lasting partnership, where we guide you from the
                    initial concept through to launch and beyond. Our goal is to
                    collaborate closely, transforming your ideas into a digital
                    presence that you're proud to showcase.
                  </p>
                </div>
                <div>
                  <p class="font-bold mb-3 text-lg text-white">Creating Tailored Solutions</p>
                  <p>
                    We understand that your business has its own story and requirements. That's
                    why we offer bespoke digital solutions, tailored to meet your
                    specific needs. Whether you're a startup looking to establish
                    your brand or an existing business aiming to enhance your
                    online presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <!-- our team -->
        <div class="light py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mb-16">
            <h3 class="text-3xl font-bold tracking-tight sm:text-4xl">
              {{ peopleData.title }}
            </h3>
            <p class="mt-6 text-lg leading-8">
              {{ peopleData.subtext }}
            </p>
          </div>
          <ul role="list" class=" grid sm:grid-cols-2 gap-3">
            <li v-for="person in people" :key="person.name"
              class="group flex flex-col gap-10 sm:flex-row sm:shadow-xl p-5 rounded-xl bg-gray-50/90 hover:bg-gray-50/100 transition duration-300 ease-in-out hover:shadow-none">
              <img class="sm:aspect-[4/5] sm:w-52 flex-none rounded-2xl object-cover border-2 border-gray-200 group-hover:border-white shadow-inner group-hover:shadow-xl"
                :src="person.imageUrl" :alt="'image of ' + person.name" />
              <div class="max-w-xl flex-auto">
                <h3 class="text-xl font-bold leading-8 tracking-tight">
                  {{ person.name }}
                </h3>
                <!-- <p class="text-sm text-orange-700 font-semibold mb-3">{{ person.businessRole }}</p> -->
                <p class="text-base leading-7 font-semibold">
                  {{ person.role }}
                </p>
                <p class="mt-6 text-base leading-7">
                  {{ person.bio }}
                </p>
              </div>
            </li>
          </ul>
        </div>
        </div>


      <!-- Values section -->

      <div class="dark py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ valuesData.title }}</h2>
            <p class="mt-6 text-lg leading-8">{{ valuesData.description }}</p>
          </div>
          <dl
            class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div v-for="value in values" :key="value.name">
              <dt class="inline text-lg text-white font-bold">{{ value.name }}</dt>
              <dd class="mt-1">{{ value.description }}</dd>
            </div>
          </dl>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import { defineComponent, h, ref } from "vue";
import valuesData from "@/data/values.json";
import peopleData from "@/data/team.json";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const values = ref(valuesData.values);
const people = ref(peopleData.staff);
</script>
