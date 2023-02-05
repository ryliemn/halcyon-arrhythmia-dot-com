<script setup lang="ts">
import HomeHeader from '../components/HomeHeader.vue'
import HomeNav from '../components/HomeNav.vue'
</script>

<template>
    <main>
        <header>
            <HomeHeader />

            <HomeNav />
        </header>
    </main>
</template>

<style>
@media (max-width: 640px) {
    main {
        margin-top: 50%;
    }
}
</style>