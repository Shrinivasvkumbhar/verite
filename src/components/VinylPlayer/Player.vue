<style scoped>
.music-lines{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.line{
    background-color: #cdc6be;
    width: 100%;
    height: 1px;
}
@media screen and (max-width: 450px) {
    .line{
        height: 100%;
        width: 1px;
    }
    
}
</style>

<template>
    <div class="wrap-music flex w-full sm:flex-col-reverse sm:items-center">
        <div class="vinyl-player w-1/3 h-80 sm:w-[90%]">
        
                <!-- <img src="/src/assets/svg/vinylplayer/VinylPlayer.svg" class="svg-player" alt="VinylPlayer" /> -->
                <PlayerSVG />

        </div>
        <div class="music-lines w-2/3 sm:w-[80%] sm:h-96">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script setup>
import PlayerSVG from "./PlayerSVG.vue"
</script>