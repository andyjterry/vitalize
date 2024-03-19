<template>
    <div class="dark py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-base font-semibold leading-7">Empower Your Brand</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white  sm:text-4xl">Digital Solutions Tailored for You</p>
          <p class="mt-6 text-lg leading-8">At Brand Badger, we’re dedicated to crafting unique digital experiences that showcase your brand's true essence. From visual identity to robust online presence, we have everything you need to succeed.</p>
        </div>
        <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-12">
            <dt class="inline text-lg text-white font-bold">
              <component :is="feature.icon" class="absolute left-1 top-1 h-7 w-7 text-primary font-bold text-white text-xl" aria-hidden="true" />
              {{ feature.name }}
            </dt>
            <br/>
            <dd class="inline text-sm">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </template>
  <script setup>
import {
  GlobeAltIcon,
  RectangleGroupIcon,
  CameraIcon,
  ChartBarIcon,
  PencilIcon, // Placeholder for ChatIcon
  ShoppingCartIcon,
} from '@heroicons/vue/20/solid'
const features = [
  {
    name: 'Visual Identity Design',
    description: 'We delve deep into the heart of your brand to create a visual identity that not only stands out but also speaks directly to the hearts of your audience. From logos to color schemes, every design element is crafted to embody your brand\'s ethos and values, ensuring consistency and recognition across all platforms.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Custom Web Development',
    description: 'Our bespoke web development services are centered around creating sites that are not just visually appealing but also highly functional. Focused on user experience, we ensure your website is responsive, accessible, and tailored to meet the specific needs of your business, enhancing user engagement and conversion rates.',
    icon: RectangleGroupIcon,
  },
  {
    name: 'SEO Optimization',
    description: 'In the digital world, visibility is everything. Our targeted SEO strategies are designed to improve your website’s ranking, increase your visibility in search results, and drive more organic traffic. By optimizing your site for SEO, we help you reach your target audience more effectively and grow your online presence.',
    icon: ChartBarIcon,
  },
  {
    name: 'Social Media Strategy',
    description: 'Social media is a powerful tool for connecting with your audience and building your brand. We develop comprehensive social media strategies that not only increase your reach and engagement but also reflect your brand\'s personality. Let us help you navigate the social landscape to create meaningful connections with your audience.',
    icon: PencilIcon,
  },
  {
    name: 'Photography & Content Creation',
    description: 'Content is king, and we reign supreme in creating compelling narratives for your brand. Through professional photography and impactful content creation, we tell your brand’s story in a way that engages and inspires your audience. Let us help you showcase your products or services in the best light, with content that converts.',
    icon: CameraIcon,
  },
  {
    name: 'E-commerce Solutions',
    description: 'E-commerce is more than just selling online; it’s about creating an enjoyable shopping experience for your customers. With our expertise in Shopify, we design and develop e-commerce solutions that are easy to manage, beautifully designed, and optimized for conversions, helping you grow your online sales with ease.',
    icon: ShoppingCartIcon,
  },
]
</script>
