<template>
    <div>
        <input v-model="newTask" type="text" placeholder="Add new Task">
        <button
            :disabled="newTask === ''"
            @click="addTask"
        >
            Add
        </button>
        <p v-if="tasks.length === 0">No Tasks yet!</p>
        <ul v-else>
            <li v-for="(task, index) in tasks" :key="index">
                {{ index + 1 }}. {{ task }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const newTask = ref("");
    const tasks = ref([]);

    function addTask(){
        if(newTask.value !== ''){
            tasks.value.push(newTask.value);
            newTask.value = "";
        }
    }

</script>