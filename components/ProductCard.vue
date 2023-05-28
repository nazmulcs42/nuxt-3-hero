<template>
    <div class="p-4">
    <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img
        class="w-full max-h-96"
        :src="product.image"
        alt="Product Photo"
      >
      <div class="px-6 py-4 pb-2">
        <div class="font-bold text-xl mb-2">{{ product.title }}</div>
     </div>
      <div class="px-6 py-4">
        <span class="badge mr-2">#price ${{ product.price }}</span>
        <span class="badge">#rating {{ product.rating.rate }}</span>
      </div>
      <div class="px-6 py-4 text-center">
         <NuxtLink :to="`/products/${product.id}`">
            <TButton>Show Details</TButton>
        </NuxtLink>
        <!-- <NuxtLink :to="`/products/${product.id}`">
            <TButton>Show Details</TButton>
        </NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<script setup>
    const { product } = defineProps(['product']);
    console.log(product);
</script>

<style scoped>
.badge {
    @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
    &:hover {
        @apply bg-gray-300;
    }
}
</style>
