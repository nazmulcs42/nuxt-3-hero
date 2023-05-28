<template>
  <div>
    <header>
      <nav class="text-2xl py-5">
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <slot />

    <footer>
        <div class="copyright">
            <i class="fa fa-copyright" aria-hidden="true">@Copyright All rights reserved.</i>
        </div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>

@tailwind base;
@tailwind components;
@tailwind utilities;
nav {
  background-color: rgba(137, 92, 205, 0.9);
  padding: 10px;
}
nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
nav ul li {
  list-style: none;
}
nav ul li a {
  text-decoration: none;
  font-size: larger;
  font-weight: 600;
  color: black;
  padding: 10px;
  border-radius: 8px;
}
nav ul li a:hover {
  background-color: antiquewhite;
  color: crimson;
}
.router-link-exact-active {
  color: chartreuse;
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
