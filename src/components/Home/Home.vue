<template>
    <!-- <CountDown v-if="show" :show="show" @close="show=false"/> -->
    <MainClone/>
    <PostCard/>
     <div class="black-bg">
        <Section1/>
        <Section2/>     
     </div>
</template>

<script>
import MainClone from './MainClone.vue';
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
import TextMorph from './TextMorph.vue';
import CountDown from '../CountDown.vue';
import PostCard from './PostCard.vue';


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
    TextMorph,
    CountDown,
    PostCard
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
