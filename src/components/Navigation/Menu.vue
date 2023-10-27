<template>
    <div class="nav" ref="menu">
        <div class="menu" >
            <div class="flex flex-col gap-[10px] text-center">
                
                <a href="/" class="nav-item" ref="navItem1">
                    <h1 class="menu-title">Home</h1>
                </a>
                <a href="/games" class="nav-item" ref="navItem2">
                    <h1 class="menu-title">Games</h1>
                </a>
                <a href="/blogs" class="nav-item" ref="navItem3">
                    <h1 class="menu-title">Blogs</h1>
                </a>
                <a href="/leaderboard" class="nav-item" ref="navItem4">
                    <h1 class="menu-title">Leaderboard</h1>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { gsap } from 'gsap';

export default {
    beforeRouteLeave(href, from, next) {
        // Reset your component's state here
        console.log(href);
        next();
    },
}
</script>

<style>
@import url("../../assets/css/menu.scss");
</style>
