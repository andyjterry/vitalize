<template>
  <div class="bg-white my-20">
    <main class="isolate">
      <!-- Content section -->
      <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Story
          </h2>
          <div class="sm:mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div class="lg:w-full lg:max-w-full lg:flex-auto ">
 
              <div class="sm:mt-10 mt-3 text-base  leading-7 text-gray-700  grid sm:grid-cols-2 sm:space-x-4 ">
                <div class="">
                  <p class="text-xl leading-8 text-gray-600 mb-10">
                Welcome to Brand Badger, where our passion for digital
                craftsmanship turns your business vision into reality. Our story
                began in 2016 as Andy Terry Web and Design, a small venture
                driven by a love for web development and design. Over the years,
                we've evolved into a comprehensive branding and digital
                solutions provider, offering everything from logo design and
                website development to custom apparel and photography services.
              </p>
                <p>
                  <strong>Blending Craftsmanship with Creativity:</strong> At
                  Brand Badger, we believe in more than just delivering
                  projects; we believe in crafting digital masterpieces. With
                  every line of code and design element, we aim to reflect the
                  uniqueness of your brand, ensuring that each project is not
                  only functional but also visually compelling.
                </p>
                <p class="mt-10">
                  <strong>Building Genuine Partnerships:</strong> Our journey
                  with you is more than a series of transactions. It's about
                  building a lasting partnership, where we guide you from the
                  initial concept through to launch and beyond. Our goal is to
                  collaborate closely, transforming your ideas into a digital
                  presence that you're proud to showcase.
                </p>
                <p class="mt-10">
                  <strong>Creating Tailored Solutions:</strong> We understand
                  that your business has its own story and requirements. That's
                  why we offer bespoke digital solutions, tailored to meet your
                  specific needs. Whether you're a startup looking to establish
                  your brand or an existing business aiming to enhance your
                  online presence, we're here to craft solutions that resonate
                  with your goals.
                </p>
              </div>
              <div class="  text-gray-800 mt-10 sm:mt-0">
                <div class="mb-16">
                <h2
              class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl"
            >
              Our Team
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-800/80">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
                <ul
            role="list"
            class="sm:-mt-12 space-y-12 divide-y divide-gray-200/10 xl:col-span-3"
          >
            <li
              v-for="person in people"
              :key="person.name"
              class="flex flex-col gap-10 pt-12 sm:flex-row sm:shadow-xl p-5 rounded-xl bg-gray-50/95"
            >
              <img
                class="sm:aspect-[4/5] sm:w-52 flex-none rounded-2xl object-cover border-2 border-gray-200 shadow-xl"
                :src="person.imageUrl"
                :alt="'image of ' + person.name"
              />
              <div class="max-w-xl flex-auto">
                <h3
                  class="text-xl font-bold leading-8 tracking-tight"
                >
                  {{ person.name }}
                </h3>
                <p class="text-sm text-orange-700 font-semibold mb-3">{{ person.businessRole }}</p>
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
            </div>
          </div>
        </div>
      </div>

      <!-- Values section -->
      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our values
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            At Brand Badger, we're driven by a commitment to not just meet, but exceed our client's expectations. Here's what we stand for:
          </p>
        </div>
        <dl
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <div v-for="value in values" :key="value.name">
            <dt class="font-semibold text-gray-900">{{ value.name }}</dt>
            <dd class="mt-1 text-gray-600">{{ value.description }}</dd>
          </div>
        </dl>
      </div>

    </main>
  </div>
</template>

<script setup>
import { defineComponent, h, ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const stats = [
  { label: "Websites Launched", value: "300+" },
  { label: "Branding Projects Completed", value: "120+" },
  { label: "Satisfied Clients", value: "200+" },
  { label: "Years Making Digital Beautiful", value: "7+" },
];

const values = [
  {
    name: "Innovation in Design",
    description:
      "Pushing the boundaries of digital aesthetics to create stunning, user-friendly websites that stand out in the digital crowd.",
  },
  {
    name: "Transparency First",
    description:
      "Keeping you in the loop with clear communication from start to finish, ensuring the project aligns with your vision.",
  },
  {
    name: "Continuous Growth",
    description:
      "Evolving with the latest web technologies and design trends to keep your brand at the cutting edge.",
  },
  {
    name: "Supportive Partnership",
    description:
      "Fostering lasting relationships with our clients by being there when you need us, before, during, and after project completion.",
  },
  {
    name: "Empowerment Through Education",
    description:
      "Equipping you with the knowledge and tools to manage your digital presence effectively, empowering your team and your brand.",
  },
  {
    name: "Balanced Creativity",
    description:
      "Finding the perfect blend of creativity and functionality to ensure your website not only looks great but works great too.",
  },
];
const people = ref([
  {
    name: "Andy Terry",
    businessRole: "Managing Director",
    role: "Front-End Developer & Designer",
    imageUrl:
      "https://scontent.fman2-2.fna.fbcdn.net/v/t39.30808-6/347231099_7543022469094831_3545115610667272054_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=25drA_TgopQAX8-UVhd&_nc_ht=scontent.fman2-2.fna&oh=00_AfBYZt3TduiLhjDNC9l-U93tr8MlwhEbyUVe225uENidKg&oe=65F7C499", // Update with actual URL or keep a placeholder
    bio: "With a blend of technical expertise and an eye for design, Andy drives Brand Badger's mission to create unique digital experiences that engage and inspire.",
  },
  {
    name: "Paige Henaghan",
    businessRole: "Director",
    role: "Business Operations & Client Relations",
    imageUrl:
      "https://scontent.fman2-1.fna.fbcdn.net/v/t1.6435-9/47360186_2255498424727307_7988958711831855104_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=25tG1gOzQ8oAX_QvIMX&_nc_oc=AQn-qHjSl7fRKI6ql5RQKdKC3__APoCTZcJcSGzyltU0HrcZim7q4UG8Y_u_U4y-gQI&_nc_ht=scontent.fman2-1.fna&oh=00_AfBWwBjho0MHZip63i-jQ76x-jMai7hxF6zMmsqzDTWXyw&oe=661B189A", // Update with actual URL or keep a placeholder
    bio: "Paige ensures smooth operations and fosters strong relationships with our clients, ensuring every project is a success from start to finish.",
  },
  // Add more team members here
]);
</script>
