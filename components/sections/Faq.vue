<template>
    <div class="bg-dark text-light">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-12 lg:px-8">
        <div class="mx-auto max-w-5xl divide-y divide-gray-900/10">
  <div class="max-w-3xl">
          <h2 class="text-4xl font-bold leading-10 tracking-tight ">Frequently asked questions</h2>
          <p class="my-4">Want to know how Brand Badger can help your business thrive online? Check out these FAQs for some quick answers. No question is too big or too small, so fire away!</p>
        </div>
          <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
              <dt>
                <DisclosureButton class="flex w-full items-start justify-between text-left ">
                  <span class="text-xl font-semibold leading-7">{{ faq.question }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                    <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base leading-7">{{ faq.answer }}</p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
  
  const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "There's no one-size-fits-all answer, but we'll be honest. A simple site can be ready in a few weeks, while a complex project might take a couple of months. We'll chat with you to understand your needs and get cracking to make your website a reality, right quick."
  },
  {
    question: "What do I need to provide?",
    answer: "Think of your website like a cuppa – it needs ingredients! Text, images, and a sprinkle of your brand personality are what we're looking for. Don't fret if writing isn't your cup of tea; we can guide you or even create content that sings."
  },
  {
    question: "How much does a website cost?",
    answer: "Website prices are like a pub menu – they vary!  We can build a simple landing page (think a light starter) or a full-blown website with all the bells and whistles (the main course). Let's chat about your budget, and we'll create a plan that's just right, no hidden fees here."
  },
  {
    question: "Do you use WordPress or templates?",
    answer: "Nope, we ditch the templates and build websites from scratch. Your website should be as unique as your business, so we hand-code everything for ultimate flexibility, top speed, and a dash of Brand Badger magic. Bespoke websites, that's our game."
  },
  {
    question: "Can you help with Google visibility?",
    answer: "You bet! We're the SEO superheroes of the digital world. We'll make sure your website shines bright on the vast web. SEO's built right in from the start, no afterthoughts here."
  },
  {
    question: "What about hosting and domains?",
    answer: "We're your digital estate agent, but without the fancy suit. We don't directly sell the land (hosting) or the address (domain), but we'll guide you through getting them. Plus, we ensure your site's new home is secure and easy to find. Think of it as setting up shop in a prime location online."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! Mobile-first design is what we do best. Your website will look fantastic on any device, big or small. Imagine having a shop that fits right in your pocket, without the cramped feeling. Convenience is key!"
  },
  {
    question: "Can I update the site myself?",
    answer: "Since we build websites with custom code, updates require some coding knowledge (it's not like waving a magic wand!). But fear not! We offer website maintenance packages that keep your site secure, up-to-date, and performing at its best. Let us handle the technical stuff while you focus on what you do best – running your brilliant business."
  }
]




  </script>