<style>

</style>
<template>
   
    
    <main>
        <Header/>
       <div class="main-wrapper">
         <div class="letter-wrapper main-sec">
                <div class="letter" id="verite">Vér<div id="rotate-letter" class="flip">i</div>té</div>

                <div class="paper-desc text">
                    In a momentous announcement, Verteil, the trailblazing organization renowned for its innovative initiatives, has unveiled its plans to host the much-anticipated event, promising a nostalgic extravaganza that will transport attendees back to the golden days of yore. Set against a backdrop of retro elegance and timeless charm, this upcoming celebration is poised to enrapture guests with a captivating blend of vintage allure and modern sophistication. Anticipation runs high as the Verteil team gears up to craft an immersive experience that pays homage to the cherished traditions and cultural legacies of a bygone era. Mark your calendars and prepare to be swept away on a sentimental journey through the enchanting tapestry of 'Verite'!
                </div>
            </div>
            <div class="hero-container main-sec">
                <img src="../../assets/svg/characters/Asset 4.svg" alt="">
            </div>
       </div>
    </main>
</template>
<script>
import {gsap} from 'gsap';
import Header from '../Navigation/Header.vue';

export default{
    props: [],
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.veriteAnimation();
        },
        veriteAnimation() {
            gsap.from("#verite", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.5
            });
            gsap.fromTo("#rotate-letter", {
                rotateX: "0deg"
            }, {
                rotateX: "180deg",
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                transformOrigin: "50% 50%",
                repeatDelay: 0.5
            });
        }
    },
    components: { Header }
}
</script>