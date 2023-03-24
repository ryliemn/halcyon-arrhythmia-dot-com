<script setup lang="ts">
</script>

<template>
    <h3>latest video: Eternal Harvest</h3>
    <iframe src="https://www.youtube.com/embed/xLhD071c71A" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>
</template>

<style scoped>
iframe {
    margin-bottom: .67em;
    aspect-ratio: 16 / 9;
    width: 640px;
}

@media (max-width: 640px) {
    iframe {
        aspect-ratio: 16 / 9;
        width: 100%;
    }
}
</style>
