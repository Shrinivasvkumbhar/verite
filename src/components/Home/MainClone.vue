<style>
@import url("../../assets/css/mainClone.scss");
</style>
<template>
    <main>
        <Header />
        <div class="main-wrapper flex-col sm:!mx-2 sm:flex-col-reverse">
           
            <div class="flex flex-row items-start justify-around h-fit mt-[50px] sm:flex-col">
                <HeadCard :image="'pager.jpg'" :heading="'Beep. Play. Repeat'" :description="'Witnessing a revolutionary leap in communication, India embraces the launch of the Nostalgic Pager, facilitating instantaneous connectivity nationwide'"/>
                <div class="center-head-card head-card flex flex-col sm:w-full sm:h-1/2 sm:mb-12 sm:border-y-[1px] sm:border-x-0 sm:border-[#1d1d1b]">
                    <h2 class="sm:!text-4xl">Ready, Set!</h2>
                    <p class="paper-desc paper-desc-head sm:!text-3xl">
                       Unity and strategy key. Plan, communicate, conquer for Verite triumph!
                    </p>
                    <p class="paper-desc !text-center !mt-10 sm:text-xl">
                        GO!
                    </p>
                </div>
                <HeadCard :image="'sooper-11.png'" :heading="'SOOPER 11'" :description="'Verteil introduces SOOPER11, a thrilling cricket fantasy game exclusively for Verteil employees, adding excitement to the World Cup 23'"/>
            </div>
             <div>
                <div  class="head flex justify-center overflow-hidden !m-0 h-[400px] sm:h-[200px] sm:!mt-5">
                    <img id="verite" class="invert brightness-0 sepia-50 scale-150 sm:scale-90" src="../../assets/img/logo.PNG" alt="">
                </div>
                <div class="mt-16 flex">
                    <div class="w-2/5 mr-[10%]">
                        <div class="plane-animate">
                            <svg viewBox="0 0 3387 1270">
                                <path id="planePath" class="planePath" d="M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179" />
                                <g id="plane">
                                <polygon class="fil1" points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 " />
                                <polygon class="fil2" points="199,0 -141,-10 -163,63 -123,9 " />
                                <polygon class="fil3" points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 " />
                                <path class="fil4" d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z" />
                                <polygon class="fil1" points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 " />
                                </g>
                                <!-- Define the motion path animation -->
                                <animateMotion xlink:href="#plane" dur="5s" repeatCount="indefinite" rotate="auto">
                                <mpath xlink:href="#planePath" />
                                </animateMotion> 
                            </svg>
                        </div>
                        <div class="block relative">
                            <h2 class="h-head s-1"><span class="mr-6">A</span> Nostalgic</h2>
                            <h2 class="h-head sub">Journey!</h2>
                            <div class="divs _0">
                            <div class="div-2 _0"></div>
                            <div class="div-2">

                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="gif-container w-1/2">
                        <img src="../../assets/gif/zoozoo.gif" alt="zoozoo" srcset="" class="w-full">
                    </div>
                </div>
             </div>
        </div>
       
    </main>
</template>
<script>
import { gsap } from 'gsap';
import Header from '../Navigation/Header.vue';
import HeadCard from './HeadCard.vue';

export default {
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
    components: { Header, HeadCard }
}
</script>