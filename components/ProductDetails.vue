<template>
    <div class="grid grid-cols-2 gap-4">
      <div class="p-7">
        <img :src="product.image"  alt="photo">
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-blue-500 text-xl my-7">Price: {{product.price  }}</p>
        <p class="text-red-500 text-xl my-7">Rating: {{product.rating.rate  }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
        <p class="my-7">{{ product.description }}</p>
      </div>
    </div>
</template>

<script setup>
  const { product } = defineProps(['product']);
  console.log(product);
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>