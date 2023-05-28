<template>
    <div class="mt-7 max-w-sm mx-auto text-center">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-4xl">Oops!</p>
        <p class="mt-7">{{ error.message }}</p>
        <TButton class="mt-7" @click="handleClearError">Go Home Page</TButton>
    </div>
</template>

<script setup>
    defineProps(['error']);
    const handleClearError = () => clearError({ redirect: "/"})
</script>

<style scoped>

</style>