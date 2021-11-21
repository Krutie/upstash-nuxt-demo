<template>
  <div>
    <NuxtLink to="/"> Home </NuxtLink>
    <NuxtLink to="/about"> About </NuxtLink>
    <NuxtLink to="/contact"> Contact </NuxtLink>

    <h1> app.vue  </h1>
    {{ count }}

    <NuxtPage />
  </div>
</template>

<script setup>
  const router = useRoute();
  const { data: count } = await useAsyncData('Count', () => $fetch('/api/count', { params: { path: router.path}}))
</script>