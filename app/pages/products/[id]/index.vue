<script setup>
    const route = useRoute();
</script>
<template>
    <div>
        <h2>Product Dynamic Page</h2>
        <p>You are viewing product with ID: {{ route.params.id }} </p>
        <NuxtLink to="/products/about">Go to Product's About</NuxtLink>
    </div>
</template>