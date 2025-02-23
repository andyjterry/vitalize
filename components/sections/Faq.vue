<template>
  <div class="dark">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-12 lg:px-8">
      <div class="mx-auto max-w-5xl divide-y divide-gray-900/10">
        <div class="max-w-3xl">
          <h2>Frequently asked questions</h2>
          <p class="my-4">Curious about how our vitamin injections can benefit you? Check out these FAQs for some quick answers. We're here to help you feel your best, so don’t hesitate to ask if you’ve got more questions!</p>
        </div>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left">
                <span class="text-lg sm:text-2xl font-semibold leading-7">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-md sm:text-xl leading-7">{{ faq.answer }}</p>
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
  question: "What types of vitamin injections do you offer?",
  answer: "We offer a range of vitamin injections including Vitamin B12, Vitamin C, Biotin, Vitamin D, Magnesium, and more. Each is tailored to meet specific health needs, from boosting energy and immunity to improving skin health and muscle recovery."
},
{
  question: "Who can benefit from vitamin injections?",
  answer: "Anyone looking to improve their overall wellness, boost energy levels, support their immune system, or address specific health concerns can benefit from vitamin injections. They’re especially useful for those with dietary restrictions, athletes, and busy professionals."
},
{
  question: "How often should I get vitamin injections?",
  answer: "The frequency of vitamin injections depends on your individual health needs and the specific vitamins being administered. Generally, injections can be given weekly, bi-weekly, or monthly. We’ll customize a plan that works best for you."
},
{
  question: "Are vitamin injections safe?",
  answer: "Yes, vitamin injections are generally safe when administered by a qualified professional. We conduct a thorough consultation before starting any treatment to ensure it’s safe for you. Possible side effects are minimal, but we’ll discuss any risks with you."
},
{
  question: "What should I expect during my appointment?",
  answer: "Your appointment will begin with a consultation to assess your needs. The injection itself only takes a few minutes, and most people feel minimal discomfort. You can return to your daily activities immediately afterward."
},
{
  question: "What if I have medical conditions?",
  answer: "It’s important to inform us of any medical conditions or medications you’re taking. We’ll review your health history during the consultation to ensure the injections are safe for you. If necessary, we may recommend alternative treatments or adjust the dosage."
},
{
  question: "Can I combine different vitamin injections?",
  answer: "Absolutely! Combining different vitamin injections can provide a more comprehensive boost to your health. We can tailor a package to your needs, ensuring you get the most benefit from your treatment plan."
},
{
  question: "Do vitamin injections hurt?",
  answer: "Most people experience little to no pain during a vitamin injection. The needles used are very fine, and any discomfort is typically minimal and brief. We make sure you’re as comfortable as possible during your appointment."
},
{
  question: "How do I know which vitamin injection is right for me?",
  answer: "Our team will guide you through choosing the right injection based on your symptoms, lifestyle, and health goals. Whether you need an energy boost, immune support, or skin rejuvenation, we’ll recommend the best option for you."
},
{
  question: "How do I book an appointment?",
  answer: "Booking is easy! You can book directly through our website, give us a call, or visit our clinic. We’ll work with you to find a convenient time that fits your schedule. "
}
]
</script>
