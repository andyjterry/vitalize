<template>
    <div class="container mx-auto">
        <h1 class="text-4xl font-bold mb-4">Web Development Services</h1>
        <p class="text-lg mb-8">We offer a wide range of web development services to help you achieve your online goals.</p>

        <div class="grid grid-cols-2 gap-4">
            <!-- Replace the following code with your actual services data -->
            <div v-for="service in services" :key="service.id" class="p-4 border rounded">
                <h2 class="text-xl font-bold mb-2">{{ service.title }}</h2>
                <p>{{ service.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    id: 1,
                    title: "Service 1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    id: 2,
                    title: "Service 2",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                // Add more services as needed
            ]
        };
    }
};
</script>

<style scoped>
/* Add your custom styles here using Tailwind CSS classes */
</style>