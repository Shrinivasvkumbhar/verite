<template>
    <MainClone/>
    <Section1/>
    <Player />
     <!-- <Section2/>      -->
</template>

<script>
import MainClone from './Home/MainClone.vue';
import Section1 from './Home/Section1.vue';
import Section2 from './Home/Section2.vue';
import TextMorph from './Home/TextMorph.vue';
import Player from "./VinylPlayer/Player.vue"


export default {
    components: {
    MainClone,
    Section1,
    Section2,
    TextMorph,
    Player
},
    beforeRouteLeave(to, from, next) {
        // Reset your component's state here
        console.log(to);
        //this.resetState();
      next();
    },
};
</script>

<style>

</style>