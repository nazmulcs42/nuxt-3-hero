<template>
 <div>
    <Head>
      <Title>Nuxt Hero | About Page</Title>
    </Head>
    <div class="w-3/4 mx-auto my-5">
      <h2 class="text-5xl">About</h2>
      <p class="text-2xl">
        Amet consectetur adipisicing elit. Perspiciatis tempora hic sapiente
        eveniet nobis ut impedit quisquam est eos debitis.
      </p>
      <p class="text-2xl">
        Consectetur adipisicing elit. Facere similique, distinctio mollitia
        ipsum id repellat omnis exercitationem quos saepe laudantium.
      </p>
      <p class="mt-7 text-xl">
        {{ data }}
      </p>
    </div>
 </div>
</template>

<script setup>

  const { data } = await useFetch("/api/user");
  console.log(data)
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
