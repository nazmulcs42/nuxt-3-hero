<template>
  <div>
    <Head>
      <Title>Nuxt Hero | Product Details</Title>
      <Meta name="Description" :content="product.description" />
      <Meta name="Author" content="Md. Nazmul Islam" />
    </Head>
    <div class="w-3/4 mx-auto my-5">
      <h2 class="text-5xl">Product details</h2>
      <ProductDetails :product="product" />
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
/* 
definePageMeta({
  layout: "products",
}); */
const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${id}`
);
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product  not found.",
    fatal: true
  })
}
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
