<template>
    <MainClone/>
    <Section1/>
    <span class="section-3">
        <Player />
        <Poster/>
    </span>
     <!-- <Section2/>      -->
</template>

<script>
import MainClone from './Home/MainClone.vue';
import Section1 from './Home/Section1.vue';
import Section2 from './Home/Section2.vue';
import TextMorph from './Home/TextMorph.vue';
import Player from "./VinylPlayer/Player.vue";
import Poster from './Poster.vue';


export default {
    components: {
    MainClone,
    Section1,
    Section2,
    TextMorph,
    Player,
    Poster
},
    beforeRouteLeave(to, from, next) {
        // Reset your component's state here
        console.log(to);
        //this.resetState();
      next();
    },
};
</script>

<style scoped>
.section-3 {
    display: flex;
    position: absolute;
}
</style>