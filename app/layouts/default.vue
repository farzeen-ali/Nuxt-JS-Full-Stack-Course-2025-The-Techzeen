<template>
    <div>
        <header style="background: lightblue; padding: 18px;">
            <h2>Site Header</h2>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/admin">Admin</NuxtLink>
        </header>
        <main style="padding: 10px;">
            <slot />
        </main>
        <footer style="background: lightgreen; padding: 18px;">
            <p>Site Footer</p>
        </footer>
    </div>
</template>