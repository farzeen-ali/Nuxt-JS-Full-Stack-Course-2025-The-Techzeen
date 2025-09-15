<script setup>
    const { data } = await useAsyncData('posts', () => $fetch('https://jsonplaceholder.typicode.com/posts/1'))

    onNuxtReady(() => {
        console.log('Nuxt app is ready')
    })

</script>

<template>
    <div>
        <h2>Hook</h2>
        <p> {{ data }} </p>
    </div>
</template>