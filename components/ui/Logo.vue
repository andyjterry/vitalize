<template>
    <div class="relative">
    <div class="spartan font-bold text-4xl p-2 flex flex-row items-center justify-center">
        <span class="text-secondary">brand</span>
        <span class="text-dark">badger</span>
    </div>
    <!-- <div class="code"><span>&lt;</span> /<span>&gt;</span></div> -->
</div>
</template>

<style>
    .spartan {
        font-family: "League Spartan", sans-serif;
        letter-spacing: 1px;        
    }
    .code {
        @apply absolute -top-2 -right-4  text-xl font-bold text-blue-600; 
        font-family: "Source Code Pro", monospace;
        span {
            @apply text-orange-600
        }
    }
</style>