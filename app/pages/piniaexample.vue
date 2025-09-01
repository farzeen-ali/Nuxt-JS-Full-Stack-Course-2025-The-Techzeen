<template>
    <div>
        <h2>Pinia Example</h2>
        <h1>Counter: {{ counter.count }} </h1>
        <h2>Double: {{ counter.doubleCount }} </h2>

        <button @click="counter.increment">+</button>
        <button @click="counter.decrement">-</button>
    </div>
</template>

<script setup>
    import { useCounterStore } from '../stores/counter';

    const counter = useCounterStore();

</script>