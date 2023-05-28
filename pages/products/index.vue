<template>
  <div class="w-3/4 mx-auto my-5">
    <h2 class="text-5xl">Products</h2>
    <p class="my-7 text-xl">Currency: {{ currency }}</p>
    <p class="text-2xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
      exercitationem voluptate accusamus maxime! Ducimus sequi illum aliquid
      necessitatibus nisi eius?
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="p in products" v-bind:key="p.id">
          <ProductCard v-bind:product="p" />
        </div>
    </div>
  </div>
</template>

<script setup>
/* definePageMeta({
  layout: "products",
}); */

const { data: currency } = await useFetch('/api/currency/USD');

const {data: products} = await useFetch("https://fakestoreapi.com/products");
// console.log(products)
useHead({
  title: "Nuxt Hero | Products",
  meta: [
    { name: "description", content: "Buy Nuxt Hero's Products." },
    { name: "Author", content: "Nuxt Hero Nazmulcs42"}
  ]
})
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
a {
  margin: 5px 10px;
}
</style>
