<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import discography from "../data/discography.json";
import DiscographyReleaseRow from "./DiscographyReleaseRow.vue";

const props = defineProps<{ releaseParam: string }>();
const router = useRouter();

const myReleases = discography.releases.filter(r => r.releaseArtist === "Halcyon Arrhythmia" && r.releaseType !== "Cover");
const coverReleases = discography.releases.filter(r => r.releaseArtist === "Halcyon Arrhythmia" && r.releaseType === "Cover")
const bandReleases = discography.releases.filter(r => r.releaseArtist !== "Halcyon Arrhythmia");

let selected = ref(props.releaseParam ?? "");

onMounted(async () => {
    await scrollToRelease(selected.value);
});

async function scrollToRelease(releaseName: string) {
    window.scrollTo({
        top: document.getElementById(releaseName)?.offsetTop,
        behavior: "smooth"
    });
}
</script>

<template>
    <div id="discography">
        <h1>Original Releases</h1>
        <DiscographyReleaseRow v-for="(release, idx) in myReleases" :key="release.releaseName" :release="release"
            :is-selected="selected === release.releaseName" />
        <hr />
        <h1>Cover Releases</h1>
        <DiscographyReleaseRow v-for="(release, idx) in coverReleases" :key="release.releaseName" :release="release"
            :is-selected="selected === release.releaseName" />
        <hr />
        <h1>Band Releases</h1>
        <DiscographyReleaseRow v-for="(release, idx) in bandReleases" :key="release.releaseName" :release="release"
            :is-selected="selected === release.releaseName" />
    </div>
</template>

<style scoped>
#discography {
    margin: 1em;
}

h1 {
    text-align: center;
}

@media (max-width: 640px) {
    #discography {
        margin: 0;
    }
}
</style>
