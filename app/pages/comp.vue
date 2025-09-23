<script setup>
    const { count, increment, decrement } = useCounter()
</script>

<template>
    <div>
        <h2>Counter using Composables</h2>
        <p>Count: {{ count }} </p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>