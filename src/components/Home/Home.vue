<template>
    <!-- <CountDown v-if="show" :show="show" @close="show=false"/> -->
    <MainClone/>
     <Section1/>
     <Section2/>     
</template>

<script>
import MainClone from './MainClone.vue';
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
import TextMorph from './TextMorph.vue';
import CountDown from '../CountDown.vue';


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
