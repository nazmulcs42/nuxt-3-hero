<template>
  <div>
    <header>
      <nav class="container mx-auto shadow-md py-5 flex justify-between items-center p-4">
        <h2 class="btn text-3xl font-bold px-7">Hero</h2>
        <ul class="flex justify-center items-center">
          <li><NuxtLink to="/" class="p-5 rounded-md :hover">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="p-5 rounded-md">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="p-5 rounded-md">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>

    <!-- <footer>
        <div class="copyright">
            <i class="fa fa-copyright" aria-hidden="true">@Copyright All rights reserved.</i>
        </div>
    </footer> -->
  </div>
</template>

<script setup></script>

<style scoped>
nav ul li a:hover {
  background-color: antiquewhite;
  color: crimson;
}
.router-link-exact-active {
  color: chartreuse;
}
body{
  position: relative;
}
.copyright {
    position: absolute;
    bottom:0;
    width: 100%;
    text-align: center;
    padding: 15px;
    border-top: 1px solid #85828228;
}
</style>
