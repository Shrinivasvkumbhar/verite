<template>
     <header class="v-header">
        
            <div class="gl-canvas w-embed">
                <canvas id="above-canvas"></canvas>
                <canvas id="below-canvas"></canvas>
            </div>
            <Menu/>
                <div class="top-nav w-screen">
                    <div class="logo-group pl-[7%] pr-[7%] select-none">
                        <div class="w-[3%] pointer-events-none">
                            <img src="../../assets/svg/logo/VERTEIL_LOGO.svg" alt=""/>
                        </div>
                         <div class="v-head">
                            <a href="/">
                                <h2 class="text-5xl">The Verteil Times</h2>
                            </a>
                        </div>
                         <div class="hamburger cursor-pointer" style="margin-right: 0;">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>
                </div>
           
        </header>
</template>
<script>
import Menu from './Menu.vue';

export default{
    components:{ Menu},
    beforeRouteLeave(to, from, next) {
        // Reset your component's state here
        console.log(to);
        this.resetState();
        next();
    },
}
</script>