<script setup lang="ts">
import HomeHeader from '../components/HomeHeader.vue'
import HomeVideo from '../components/HomeVideo.vue'
import HomeNav from '../components/HomeNav.vue'
</script>

<template>
    <main>
        <header>
            <HomeHeader />
            <HomeVideo />
            <HomeNav />
        </header>
    </main>
</template>

<style>
@media (max-width: 640px) {
    main {
        margin-top: 40%;
    }
}

header {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>