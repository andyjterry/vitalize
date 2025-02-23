<template>
    <div>
      <header class="bg-gray-800 text-white p-4">
        <nav class="container mx-auto">
          <a href="/" class="text-2xl font-bold">Vitaman Prime</a>
        </nav>
      </header>
      <main class="container mx-auto py-8">
        <nuxt-page />
      </main>
      <footer class="bg-gray-800 text-white p-4 text-center">
        &copy; 2024 Vitaman Prime
      </footer>
    </div>
  </template>
  
  <style scoped>
  header, footer {
    background-color: #2d3748;
  }
  </style>
  