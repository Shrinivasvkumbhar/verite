<template>
    <div class="paper-bg"></div>
    <!-- <CountDown v-if="show" :show="show" @close="show=false"/> -->
    <MainClone/>
    <PostCard/>

     <div class="black-bg">
        <div class="paper-bg"></div>
        <Section1/>
        <section class="section-3">
            <Player/>
            <!-- <Poster/> -->
        </section>
        <div class="section-4">
        </div>
        <Blogs/>
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
import Blogs from '../Blogs/Blogs.vue';


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
    Poster,
    Blogs
}
};
</script>

<style scoped>
.section-3{
    margin: 0 50px;
}
</style>
