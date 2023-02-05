<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav>
        <div class="pure-menu">
            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <RouterLink to="/discography">discography</RouterLink>
                </li>
                <li class="pure-menu-item">
                    <a href="https://www.youtube.com/channel/UC16pKRI_bamMELOrPgLYH_Q" target="_blank">
                        youtube
                    </a>
                </li>
                <li class="pure-menu-item">
                    <a href="https://halcyonarrhythmia.bandcamp.com" target="_blank">
                        bandcamp
                    </a>
                </li>
                <li class="pure-menu-item">
                    <a href="https://www.reddit.com/r/halcyonarrhythmia/" target="_blank">
                        reddit
                    </a>
                </li>
                <li class="pure-menu-item">
                    <a href="https://open.spotify.com/artist/6JvGHz8w9nc7rzzsT1uKM3?si=tPvIEfhURg-2XqOdNE-p1w"
                        target="_blank">
                        spotify
                    </a>
                </li>
                <li class="pure-menu-item">
                    <a href="https://music.apple.com/us/artist/halcyon-arrhythmia/1543485477" target="_blank">
                        apple music
                    </a>
                </li>
                <li class="pure-menu-item">
                    <a href="https://music.youtube.com/channel/UCwQrQpVr4oysUOeZU3XMEPQ" target="_blank">
                        youtube music
                    </a>
                </li>
                <li class="pure-menu-item">
                    <a href="https://amazon.com/music/player/artists/B08PQ8FXHD/halcyon-arrhythmia" target="_blank">
                        amazon music
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    font-size: 20px;
    text-align: center;
}

nav a {
    display: inline-block;
    margin-bottom: 12px;
}
</style>
