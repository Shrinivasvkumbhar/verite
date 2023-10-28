<template>
    <div class="paper-bg"></div>
    <!-- <CountDown v-if="show" :show="show" @close="show=false"/> -->
    <MainClone/>
    <PostCard/>
     <div class="black-bg">
        <Section1/>
        <!-- <span class="section-3">
            <Player/>
            <Poster/>
        </span>
        <div class="section-4">
        </div> -->
        <!-- <Section2/>      -->
     </div>
</template>

<script>
import MainClone from './MainClone.vue';
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
import TextMorph from './TextMorph.vue';
import CountDown from '../CountDown.vue';
import PostCard from './PostCard.vue';
import Player from '../VinylPlayer/Player.vue';
import Poster from '../Poster.vue';


export default {
    data()
    {
        return{
            show:true,
        }
    },
    components: {
        MainClone,
        Section1,
        Section2,
        TextMorph,
        CountDown,
        PostCard,
        Player,
        Poster
    }
};
</script>

<style scoped>
</style>
