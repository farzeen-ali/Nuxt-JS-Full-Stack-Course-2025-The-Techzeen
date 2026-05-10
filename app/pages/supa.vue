<script setup>
const { $supabase } = useNuxtApp()

const users = ref([])

const getUsers = async () => {
  const { data, error } = await $supabase
    .from('users')
    .select('*')

  if (error) {
    console.error(error)
  } else {
    users.value = data
  }
}

onMounted(() => {
  getUsers()
})
</script>

<template>
  <div>
    <h1>Users</h1>
    <pre>{{ users }}</pre>
  </div>
</template>