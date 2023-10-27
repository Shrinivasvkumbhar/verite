<template>
    <div class="scroller  overflow-auto text-12vw overflow-x-hidden z-10" ref="scroller">
        <section class="h-fit photo-wrapper">
            <div ref="wrapper1" class="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
                Keep smiling
            </div>
        </section>
        <section class=" photo-wrapper" v-for="el in [1, 2, 3, 4]" :key="el">
            <div class="wrapper flex text-[16vh] font-medium">
                <img v-for="el2 in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="el2"
                    class="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer"
                    :src="`../../assets/unsplash_images/image_${el}_${el2}.jpg`" />
            </div>
        </section>
        <section class="h-fit photo-wrapper">
            <div ref="wrapper2" class="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
                because life is a beautiful thing
            </div>
        </section>
        <section class="photo-wrapper" v-for="el in [1, 2, 3, 4]" :key="el">
            <div class="wrapper flex text-[16vh] font-medium">
                <img v-for="el2 in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="el2"
                    class="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer"
                    :src="'../../assets/unsplash_images/image_'+el+'_'+el2+'.jpg'" />
            </div>
        </section>
        <section class="h-fit photo-wrapper">
            <div ref="wrapper3" class="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
                and there's so much to smile about.
            </div>
        </section>
        
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        this.handleScroll();
    },
    methods: {
        handleScroll() {
            ScrollTrigger.scrollerProxy(this.$refs.scroller, {
                scrollTop(value) {
                    if (arguments.length) {
                        this.$refs.scroller.scrollTop = value;
                    }
                    return this.$refs.scroller.scrollTop;
                },
            });

             gsap.utils.toArray('.photo-wrapper').forEach((section, index) => {
                const wrapper = section.querySelector('.wrapper');
                ScrollTrigger.create({
                    trigger: section,
                    start: "top 80%",
                    end: "bottom bottom",
                    scrub:0.5,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const [xStart, xEnd] = index % 2 ? ["100%", (wrapper.scrollWidth - this.$el.offsetWidth) * -1] : [wrapper.scrollWidth * -1, 0];
                        gsap.to(wrapper, { x: gsap.utils.interpolate(xStart, xEnd, progress), ease: "none" });
                    },
                });
            });
        },
    },
};
</script>

<style>
.scroller {
    /* Add necessary styles here */

}
</style>
