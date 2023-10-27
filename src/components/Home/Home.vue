<template>
    <MainClone/>
     <Section1/>
     <Section2/>     
</template>

<script>
import MainClone from './MainClone.vue';
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
import TextMorph from './TextMorph.vue';



export default {
    components: {
    MainClone,
    Section1,
    Section2,
    TextMorph,
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
