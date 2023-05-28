<template>
  <div>
    <button class="btn btn-blue">
      <slot>Button</slot>
    </button>
  </div>
</template>

<script setup></script>

<style scoped>

.btn {
  @apply font-bold py-2 px-4 rounded;
  &.btn-blue {
    @apply bg-blue-500 text-white;
    &:hover {
      @apply bg-blue-700;
    }
  }
}
</style>
