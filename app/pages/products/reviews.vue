<template>
    <div>
        <h1>Product Details</h1>
        <ClientOnly>
            <LazyReviewSection />
        </ClientOnly>
    </div>
</template>

<script setup>
    const LazyReviewSection = defineAsyncComponent(() => import('@/components/ReviewSection.vue'))

</script>