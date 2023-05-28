<template>
  <div class="w-3/4 mx-auto my-5">
    <h2 class="text-4xl">Home</h2>
    <p class="text-xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
      tempora hic sapiente eveniet nobis ut impedit quisquam est eos debitis.
    </p>
    <p class="text-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
      similique, distinctio mollitia ipsum id repellat omnis exercitationem
      quos saepe laudantium.
    </p>
    <p class="mt-7 text-xl">
      {{ user }}
    </p>
  </div>
</template>

<script setup>

  //const {data: user} = await useFetch("/api/auth/user?id=4");


  const {data: user} = await useFetch("/api/auth/user", {
    method: 'post',
    body: {
      phone: "+8801716129832"
    }
  });


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
