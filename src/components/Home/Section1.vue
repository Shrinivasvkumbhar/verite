<template>

       
    
        <section class="section1" id="main-slider-container">
            <div class="torn-paper w-screen absolute top-[-80px] z-50 sm:top-[-100px]" >
                <img class="w-screen h-48 z-50" src="../../assets/img/paper-torn.png" alt="" srcset="">
            </div>
            <div id="slider-container" class="slider-container" ref="sliderContainer">
                <div class="flex !items-start">
                    <div class="banner-text flex flex-col w-[90%] !items-start p-10">
                    <div class="flex flex-col w-2/5">
                        <div class="button-74 !bg-[#fec5fb] w-40 text-center z-10 small-btn">
                            Embrace
                        </div>
                         <div class="button-74 !bg-[#ff8709] !text-[35px] w-full ml-10">
                                the Vintage Aura
                            </div>
                    </div>
                    <div class="text-[2.5vw] w-3/4 mt-10">
                        A Retro Ride to the Past, Where Memories Unfold.
                    </div>
                    </div>
                    <div class="banner-retro w-[60%] absolute right-0 ">
                        <img class="z-3" src="../../assets/svg/retro-stripes.svg" alt="">
                    </div>
                </div>
                <div class="!w-[300vw] banner-text">
                    <img src="../../assets/img/mango-bite.png" alt="aaaa" srcset="" ref="candy">
                    <h1 class="about !bg-transparent">Dive into the timeless enchantment of <span class="button-74 small-btn !bg-[#0ae448] !text-[4vw] !text-black rotate-[6.5deg] !p-5" ref="verite">Verité</span> where <span class="button-74 small-btn !p-5 gradient-btn-1 !text-[4vw] relative bottom-10">cherished</span><span class="button-74 small-btn !p-5 gradient-btn-2 !text-[4vw] !shadow-none rotate-[15deg] relative right-5 z-[-1]">memories</span> and vibrant echoes of yesteryears</h1>
                </div>
                <div>
                    <!-- <img src="../../assets/img/casette.jpg" /> -->
                    <!-- <h1>cAssette PlayEr</h1> -->
                </div>
                <div>
                    <!-- <img src="../../assets/img/gramaphone.jpg" /> -->
                    <!-- <h1>vespA</h1> -->
                </div>
                <div>
                    <h1>carolinAs pepsi</h1>
                </div>
            </div>
        </section>

</template>

<script>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        const candy = this.$refs.candy;
        const imgSlider = this.$refs.sliderContainer;
        const imgSliderMain = document.getElementById('main-slider-container');
        let windowWidth = window.innerWidth;
        let calculateSliderX = imgSlider.children[0].offsetWidth * 3 + imgSlider.children[1].offsetWidth - windowWidth;
        let imgSliderTimeline = gsap.timeline({
            default: {
                ease: 'none',
            },
            scrollTrigger: {
                trigger: imgSliderMain,
                pin: true,
                start: 'top top',
                end: '+200%',
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });
        imgSliderTimeline.to(imgSlider, {
            x: -calculateSliderX,
            duration: 3,
            ease: "none",
        });
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".banner-text",
                start: "top+=450px ",
                end: "+=450px",
                // scrub: true,
                toggleActions: "play none none none"
            }
        });
        const verite = this.$refs.verite;
        tl.to(verite, {
            duration: 0.65,
            rotation: 45,
            ease: "power2.out"
        }).from(verite, {
            rotation: 90,
            duration: 0.65,
            delay: -0.65,
            ease: "power2.out"
        });
        // Candy animation to come from top
        gsap.fromTo(candy, {
            y: "100%",
            opacity: 0,
        }, {
            y: "0%",
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: imgSliderMain,
                start: "top 30%",
                end: "bottom bottom",
                scrub: true,
            },
        });
        const candyAnimation = gsap.to(candy, {
            scrollTrigger: {
                trigger: imgSliderMain,
                start: 'top top',
                end: 'bottom 30%',
                scrub: true,
            },
            x: 0.9 * imgSliderMain.offsetWidth,
            duration: 5,
            ease: 'power1.inOut',
            y: (index) => (index % 2 === 0 ? 50 : -50),
            rotation: (index) => (index % 2 === 0 ? 360 : -360),
        });
        gsap.to(".black-bg", {
            backgroundColor: '#1d1d1b',
            scrollTrigger: {
                trigger: "#main-slider-container",
                start: 'top 90%',
                end: '+=30%',
                scrub: true,
                stagger: 0.3,
                duration: 4,
            },
        });
        const getRandomPosition = () => Math.random() * imgSliderMain.offsetWidth;
    },
    components: {  }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

/* ::-webkit-scrollbar {
    display: none;
} */

body {
    font-family: 'Canopee, sans-serif';
}

.section1 {
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 100vh;
    position: relative;
    color: black ;
}

section>h1 {
    font-size: 200px;
    padding: 50px;
}
#main-slider-container{
    overflow-x: none;
}
.slider-container {
    background-color: transparent;
    position: absolute;
    display: flex;
    overflow: hidden;
    height: 70vh;
    min-width: 100%;
    width: fit-content;
    align-items: flex-start;
    /* border: 2px solid #cdc6be; */
}
.black-bg{
    content: "";
     /* background-image: url("src/assets/img/texture-bg.jpg") !important; */
   /* Adjust the alpha value to set the opacity */
  
}
.slider-container>div {
    width: 1000px;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f6d13a;

}



.slider-container>div>h1 {
    font-size: 100px;
    text-align: center;
}</style>
