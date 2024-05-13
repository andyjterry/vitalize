<template>
  <div>
    <app-header></app-header>
    <cta
      title="Ready to Grow Online? Let's Do This!"
      text="Don't get lost in the digital woods. Brand Badger helps local businesses stand out with websites and branding that are simple, effective, and get noticed."
      :buttons="ctaButtons"
    ></cta>
    <process></process>
    <!-- <calculator></calculator> -->
    <faq></faq>
    <reviews></reviews>
  </div>
</template>

<script setup>
import { CONTACT_INFO, SOCIAL_LINKS } from '~/composables/config';
import cta from '~/components/sections/cta.vue';
import Process from '~/components/sections/Process.vue';
import Faq from '~/components/sections/Faq.vue';
import AppHeader from '~/components/header/AppHeader.vue';
// import Calculator from '~/components/sections/Calculator.vue';
import details from '~/data/details.json'
import reviews from '~/components/sections/Reviews.vue';

const ctaButtons = [
  { label: 'WhatsApp', url: CONTACT_INFO.whatsappText },
  { label: 'Email', url: `mailto:${CONTACT_INFO.email}` },
  { label: 'Call', url: CONTACT_INFO.whatsappCall },
  // Add more buttons as needed
];
</script>
