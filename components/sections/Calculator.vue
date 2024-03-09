<template>
    <div class="max-w-xl mx-auto my-10 p-8 border rounded-lg shadow-lg">
   <form @submit.prevent="submitForm" action="https://formspree.io/f/xrgnlpbd" method="POST">
 
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="needWebsite">
            Do you need a website?
          </label>
          <select id="needWebsite" v-model="form.needWebsite" class="block appearance-none w-full bg-light border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
  
        <div class="mb-4" v-if="form.needWebsite === 'yes'">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="pages">
            How many pages do you want?
          </label>
          <input type="number" id="pages" v-model.number="form.pages" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
  
        <div class="mb-4" v-if="form.needWebsite === 'yes'">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Do you have content for the pages?
          </label>
          <div>
            <label class="inline-flex items-center">
              <input type="radio" v-model="form.hasContent" value="yes" class="form-radio text-indigo-600">
              <span class="ml-2">Yes</span>
            </label>
            <label class="inline-flex items-center ml-6">
              <input type="radio" v-model="form.hasContent" value="no" class="form-radio text-pink-600">
              <span class="ml-2">No</span>
            </label>
          </div>
        </div>
  
        <div class="mb-4" v-if="form.needWebsite === 'yes'">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="domainHosting">
            Do you have a domain and hosting?
          </label>
          <select id="domainHosting" v-model="form.domainHosting" class="block appearance-none w-full bg-light border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
  
        <div class="mt-6" v-if="form.needWebsite === 'yes'">
          <p class="text-lg">Rough Price Estimate: <strong>£{{ calculatePrice }}</strong></p>
          <p class="text-sm text-gray-600 mt-2">*This is a rough estimate. Submit the form for a detailed quote.</p>
        </div>
  
        <div class="flex items-center justify-between mt-8">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit for Detailed Quote
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const form = ref({
    needWebsite: 'yes',
    pages: 1,
    hasContent: 'no',
    domainHosting: 'no',
  })
  
  const calculatePrice = computed(() => {
    let price = 0
    if (form.value.needWebsite === 'yes') {
      price += form.value.pages * 100 // Example pricing, adjust as necessary
      if (form.value.hasContent === 'no') price += 200
      if (form.value.domainHosting === 'no') price += 100
    }
    return price
  })
  
  function submitForm() {
    // Implement submission logic here
    alert('Submit for a detailed quote with contact details and business information.')
  }
  </script>
  