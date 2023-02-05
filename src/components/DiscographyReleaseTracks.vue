<script setup lang="ts">
const props = defineProps<{ tracks: Track[] }>();

function formatLength(length: number) {
    return Math.floor(length / 60) + "m " + length % 60 + "s"
};
</script>

<template>
    <table class="pure-table pure-table-horizontal">
        <thead>
            <tr>
                <th class="track-num-column">#</th>
                <th>Track</th>
                <th class="length-column">Length</th>
                <th class="video-link-column"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(track, idx) in tracks" :key="track.trackNumber">
                <td class="track-num-column">{{ track.trackNumber }}</td>
                <td>{{ track.trackTitle }}</td>
                <td class="length-column">{{ formatLength(track.trackLength) }}</td>
                <td class="video-link-column">
                    <a v-if="track.videoLink" :href="track.videoLink" target="_blank">youtube</a>
                    <a v-if="track.redditLink" :href="track.redditLink" target="_blank">reddit</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
table {
    width: 100%;
}

.track-num-column {
    width: 5%
}

.video-link-column {
    width: 26%;
    text-align: center;
}

.video-link-column a {
    display: block;
}

.length-column {
    width: 20%;
}
</style>
