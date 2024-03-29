<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import { useRouter } from 'vue-router';
import DiscographyReleaseTracks from './DiscographyReleaseTracks.vue';
const props = defineProps<{ release: Release, isSelected: boolean }>();
const router = useRouter();

let expanded = ref(props.isSelected);

const formattedDate = computed(
    () => new Date(props.release.releaseDate).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" }));

const albumArtMap: { [key: string]: string } = {
    "Session I": new URL("../assets/albumArt/SessionI.jpg", import.meta.url).href,
    "Indeed True Live": new URL("../assets/albumArt/IndeedTrueLive.jpg", import.meta.url).href,
    "Halcyon Arrhythmia": new URL("../assets/albumArt/HalcyonArrhythmia.jpg", import.meta.url).href,
    "Subjectivity": new URL("../assets/albumArt/Subjectivity.jpg", import.meta.url).href,
    "Paresis": new URL("../assets/albumArt/Paresis.jpg", import.meta.url).href,
    "The Assembly": new URL("../assets/albumArt/TheAssembly.jpg", import.meta.url).href,
    "This Beautiful Night": new URL("../assets/albumArt/ThisBeautifulNight.jpg", import.meta.url).href,
    "Negative Space": new URL("../assets/albumArt/NegativeSpace.jpg", import.meta.url).href,
    "Atlas Chugged": new URL("../assets/albumArt/AtlasChugged.jpg", import.meta.url).href,
    "Jon Heartbreak": new URL("../assets/albumArt/JonHeartbreak.jpg", import.meta.url).href,
};

function getLinkClass(link: string) {
    return {
        'disabled-link': !link
    }
}

async function selectHandler() {
    expanded.value = !expanded.value;
    if (expanded.value) {
        router.push('/discography/' + props.release.releaseName);
        await nextTick();
        window.scrollTo({
            top: document.getElementById(props.release.releaseName)?.offsetTop,
            behavior: "smooth"
        });
    }

}
</script>

<template>
    <div class="all-container" :id="release.releaseName">
        <div class="release-container" v-on:click="selectHandler()">
            <img v-bind:src="albumArtMap[release.releaseName]" />
            <div class="pure-g detail-container">
                <div class="pure-u-13-24 metadata-container">
                    <div>{{ release.releaseName }}</div>
                    <div v-if="release.releaseArtist !== 'Halcyon Arrhythmia'" class="release-artist-subtitle">
                        {{ release.releaseArtist }}
                    </div>
                    <div>{{ formattedDate }}</div>
                </div>
                <div class="pure-u-11-24 links-container">
                    <div v-bind:class="getLinkClass(release.links.bandcamp)">
                        <a v-bind:href="release.links.bandcamp" target="_blank" @click.stop>bandcamp</a>
                    </div>
                    <div v-bind:class="getLinkClass(release.links.reddit)">
                        <a v-bind:href="release.links.reddit" target="_blank" @click.stop>reddit</a>
                    </div>
                    <div v-bind:class="getLinkClass(release.links.spotify)">
                        <a v-bind:href="release.links.spotify" target="_blank" @click.stop>spotify</a>
                    </div>
                    <div v-bind:class="getLinkClass(release.links.appleMusic)">
                        <a v-bind:href="release.links.appleMusic" target="_blank" @click.stop>
                            apple music
                        </a>
                    </div>
                    <div v-bind:class="getLinkClass(release.links.youtubeMusic)">
                        <a v-bind:href="release.links.youtubeMusic" target="_blank" @click.stop>
                            youtube music
                        </a>
                    </div>
                    <div v-bind:class="getLinkClass(release.links.amazonMusic)">
                        <a v-bind:href="release.links.amazonMusic" target="_blank" @click.stop>
                            amazon music
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Transition name="slide-fade">
            <div class="dropdown-container" v-if="expanded">
                <DiscographyReleaseTracks :tracks="release.tracks" />
            </div>
        </Transition>
    </div>
</template>

<style scoped>
img {
    height: 240px;
    width: 240px;
}

.all-container {
    margin-bottom: 1em;
}

.release-container {
    display: flex;
    width: 100%;
}

.release-container:hover {
    background-color: aliceblue;
    cursor: pointer;
}

.detail-container {
    flex-grow: 1;
    margin-left: 1em;
    align-content: center;
}

.metadata-container,
.links-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.links-container {
    height: 100%;
    align-items: center;
}

.links-container a {
    display: block;
}

.links-container div {
    align-items: center;
    width: 100%;
}

.dropdown-container {
    /* margin-left: 240px;
    padding-left: 1em; */
}

.release-artist-subtitle {
    font-size: small;
}

.disabled-link a:hover {
    cursor: default;
    background-color: transparent;
}

.disabled-link a {
    color: lightgray;
    pointer-events: none;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

@media (max-width: 640px) {
    img {
        height: 125px;
        width: 125px;
    }

    .detail-container {
        margin: 0;
    }

    .links-container div {
        border-left: 1px solid lightgray;
        border-top: 1px solid lightgray;
    }

    .links-container div:last-child {
        border-bottom: 1px solid lightgray;
    }
}
</style>
