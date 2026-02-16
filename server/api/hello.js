export default defineEventHandler((event) => {
    return {
        message: "Hello From Nuxt JS",
        time: new Date().toLocaleTimeString()
    }
})