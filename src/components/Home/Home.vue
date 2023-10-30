<template>
    <div class="paper-bg"></div>
    <CountDown v-if="show" :show="show" @close="show=false"/>
    <MainClone/>
    <PostCard/>

     <div class="black-bg">
        <div class="paper-bg"></div>
        <Section1/>
        <section class="section-3 sm:p-2 sm:!m-0">
            <Player/>
            <!-- <Poster/> -->
        </section>
        <div class="section-4">
        </div>
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
.section-3{
    margin: 0 50px;
}
</style>
