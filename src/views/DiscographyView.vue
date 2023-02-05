<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router';
import Discography from '../components/Discography.vue'

const route = useRoute();
const releaseParam = String(route.params.release);
</script>

<template>
    <RouterLink to="/" id="breadcrumb">⬅️ go back</RouterLink>
    <h1>DISCOGRAPHY</h1>
    <hr />

    <Discography :release-param="releaseParam" />
</template>

<style scoped>
#breadcrumb {
    position: absolute;
    margin-top: 20px;
    margin-left: 10px;
    z-index: 999;
}

h1 {
    text-align: center;
}

@media (max-width: 640px) {
    #breadcrumb {
        margin-top: 12px;
    }
}
</style>