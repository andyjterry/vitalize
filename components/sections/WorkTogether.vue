
<template>
    <div class="relative bg-light">
      <div class="lg:absolute lg:inset-0 lg:left-1/2">
        <img class="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80" alt="" />
      </div>
      <div class="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div class="px-6 lg:px-8">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Let's work together</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">At Brand Badger, we're all about getting the job done right. You have a vision for your brand and website, and we have the tools and know-how to make it happen. No fluff, no false promises—just solid work that speaks for itself. Share your project details with us, and we'll figure out the best way to bring your ideas to life. Let's make your brand stand out and your website shine.

</p>
<form @submit.prevent="handleSubmit" class="mt-16 space-y-6">
            <div>
              <label for="name">Name</label>
              <input type="text" name="name" id="name" v-model="form.name" required>
            </div>
            <div>
              <label for="business-name">Business Name</label>
              <input type="text" name="business-name" id="business-name" v-model="form.businessName">
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" name="email" id="email" v-model="form.email" required>
            </div>
            <div>
              <label for="phone">Phone</label>
              <input type="tel" name="phone" id="phone" v-model="form.phone">
            </div>

            <div>
              <label for="additional-info">Additional Information</label>
              <textarea id="additional-info" name="additional-info" v-model="form.additionalInfo" rows="4"></textarea>
            </div>

            <div>
              <label for="budget">Your Budget</label>
              <input type="range" id="budget" name="budget" v-model="form.budget" min="500" max="4000" step="500" class="mt-2.5 block w-full">
              <p class="text-right text-base text-gray-600">£{{ form.budget }}<span class="text-orange-600 " v-if="form.budget == 4000">+</span></p>
            </div>

            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Send Inquiry</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  </template>

  <style scoped>
  label {
    @apply block text-sm font-semibold leading-6 text-gray-900;
  }

  input, textarea {
    @apply mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500;
  }

  .dynamic-form {
    @apply mt-2.5 space-y-4;
  }
  .dynamic-form input {
    @apply h-4 w-4 text-orange-600 border-gray-300 focus:ring-orange-500;
  }
  .dynamic-form label {
    @apply ml-3 block text-sm font-medium text-gray-700;
  }
  </style>
  
  <script setup>
import { reactive } from 'vue';
import { useNuxtApp } from '#app';

const form = reactive({
  name: '',
  businessName: '',
  email: '',
  phone: '',
  selection: '',
  additionalInfo: '',
  budget: 500,
});

const { $mail } = useNuxtApp();

const handleSubmit = async () => {
  try {
    await $mail.send({
      subject: 'New Inquiry from Website',
      to: 'hello@brandbadger.co.uk',
      // The template or text can depend on your setup in nuxt.config.js
      text: `
        Name: ${form.name}
        Business Name: ${form.businessName}
        Email: ${form.email}
        Phone: ${form.phone}
        Additional Info: ${form.additionalInfo}
        Budget: £${form.budget}
      `,
    });
    alert('Your inquiry has been sent successfully.');
    // Reset form or navigate to thank-you page here
  } catch (error) {
    console.error('Failed to send the email:', error);
    alert('Failed to send your inquiry.');
  }
};
</script>