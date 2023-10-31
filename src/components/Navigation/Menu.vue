<template>
    <div class="nav" ref="menu">
        <div class="menu" >
            <div class="flex flex-col gap-[10px] text-center sm:w-full">
                
                <a href="/" class="nav-item" ref="navItem1">
                    <h1 class="menu-title sm:!text-6xl">Home</h1>
                </a>
                <a href="/games" class="nav-item" ref="navItem2">
                    <h1 class="menu-title sm:!text-6xl">Games</h1>
                </a>
                <!-- <a href="/teams" class="nav-item" ref="navItem3">
                    <h1 class="menu-title sm:!text-6xl">Teams</h1>
                </a> -->
                <a href="/leaderboard" class="nav-item" ref="navItem4">
                    <h1 class="menu-title sm:!text-6xl">Leaderboard</h1>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { gsap } from 'gsap';

export default {
    
}
</script>

<style>
@import url("../../assets/css/menu.scss");
</style>
