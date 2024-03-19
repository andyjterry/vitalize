<template>
    <a
      :href="url"
      :class="'bg-' + colour + ' ' + size"
      class="tracking-wider sm:opacity-85 sm:hover:opacity-100 transition duration-300 ease-in-out text-white transition duration-300 ease-in-out  font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
       >
      {{ label }}
    </a>
  </template>
  
  <script>
  export default {
  props: {
    label: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    colour: {
      type: String,
      required: true,
      default: 'primary', // Set the default value to "primary"
      validator: function (value) {
        const validColors = ['primary', 'secondary', 'red', 'dark'];
        return validColors.includes(value.toLowerCase());
      }
    },
    size: {
      type: String,
      required: true,
      default: 'md', // Set the default value to "md"
      validator: function (value) {
        const validSizes = ['sm', 'md', 'lg'];
        return validSizes.includes(value.toLowerCase());
      }
    }
  }

}

  </script>
  
  <style scoped>
    .lg {
      @apply text-2xl rounded-tl-3xl rounded-br-3xl rounded-bl-lg rounded-tr-lg px-7 py-2.5 shadow-md hover:shadow-none;
    }
    .md {
      @apply text-xl px-3.5 py-2.5 rounded-tl-3xl rounded-br-3xl rounded-bl-lg rounded-tr-lg;
    }
    .sm {
      @apply text-sm px-3.5 py-2.5 rounded-tl-2xl rounded-br-2xl rounded-bl-md rounded-tr-md;
    }
  </style>