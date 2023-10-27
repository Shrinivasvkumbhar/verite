<style>
/* @import './styles.scss'; */

.content-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* display: flex; */
    animation: opacity 0.3s ease;
}

.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: rgb(208, 208, 208); */
}

.content:before {
    opacity: 0;
}

.content:after {
    opacity: 0;
}

.television {
    position: relative;
    display: flex;
}

.tv-static {
    position: absolute;
    border-radius: 30px;
    margin-left: 40px;
    margin-top: 90px;
    width: 345px;
    height: 315px;
}

.countdown {
    position: absolute;
    font-weight: 600;
    font-size: xx-large;
    top: 42%;
    left: 22.5%;
}

.countdown-label {
    position: absolute;
    font-weight: 600;
    font-size: large;
    color: snow;
    top: 50%;
    left: 20%;
}

.countdown {
  animation: glitch 1s linear infinite;
  color: snow;
}

@keyframes glitch {
  2%,64%{
    transform: translate(0px,2px) skew(0deg);
  }
  4%,60%{
    transform: translate(0px,-2px) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}

.countdown:before,
.countdown:after {
  content: attr(title);
  position: absolute;
  left: 0;
}

.countdown:before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-50deg); 
  }
}

.countdown:after {
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 80% 67%, 80% 70%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 80% 67%, 80% 70%, 0 100%);
}

@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}

/* .countdown-enter-from {
  opacity: 0;
}

.countdown-leave-to {
  opacity: 0;
}

.countdown-enter-from .content,
.countdown-leave-to .content {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
} */

</style>

<template>
    <Transition name="countdown">
        <div v-if="show" class="content-mask">
            <div class="content">
                <div class="television">
                    <svg class="television" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml:space="preserve" width="512px" height="512px" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.12"/>
                        <g id="SVGRepo_iconCarrier"> 
                            <rect x="5" y="51.5" style="fill:#BFA380;" width="50" height="3"/> 
                            <path style="fill:#CFC6A8;stroke:#6B5B4B;stroke-width:2;stroke-miterlimit:10;" d="M57.726,51.5H2.274C1.57,51.5,1,50.93,1,50.226 V7.774C1,7.07,1.57,6.5,2.274,6.5h55.452C58.43,6.5,59,7.07,59,7.774v42.452C59,50.93,58.43,51.5,57.726,51.5z"/> 
                            <rect x="48" y="30.5" style="fill:#777a7c;" width="4" height="4"/> 
                            <rect x="52" y="30.5" style="fill:#E7ECED;" width="4" height="4"/> 
                            <path style="fill:#6B5B4B;" d="M55,23.5h-6c-0.553,0-1-0.447-1-1s0.447-1,1-1h6c0.553,0,1,0.447,1,1S55.553,23.5,55,23.5z"/> 
                            <path style="fill:#6B5B4B;" d="M55,20.5h-6c-0.553,0-1-0.447-1-1s0.447-1,1-1h6c0.553,0,1,0.447,1,1S55.553,20.5,55,20.5z"/> 
                            <path style="fill:#6B5B4B;" d="M55,17.5h-6c-0.553,0-1-0.447-1-1s0.447-1,1-1h6c0.553,0,1,0.447,1,1S55.553,17.5,55,17.5z"/> 
                            <path style="fill:#6B5B4B;" d="M55,14.5h-6c-0.553,0-1-0.447-1-1s0.447-1,1-1h6c0.553,0,1,0.447,1,1S55.553,14.5,55,14.5z"/> 
                            <path style="fill:#546A79;" @click="$emit('close')" d="M53,41.5c0-0.553,0.447-1,1-1h1.859c-0.446-1.722-1.997-3-3.859-3c-2.209,0-4,1.791-4,4 c0,2.209,1.791,4,4,4c1.862,0,3.412-1.278,3.859-3H54C53.447,42.5,53,42.053,53,41.5z"/> 
                            <path style="fill:#E7ECED;" d="M55.859,40.5H54c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.859c0.083-0.321,0.141-0.653,0.141-1 S55.942,40.821,55.859,40.5z"/> 
                            <path style="fill:#283238;" d="M8.455,10.5C6.547,10.5,5,12.047,5,13.955v30.089C5,45.953,6.547,47.5,8.455,47.5H24v-37H8.455z"/> 
                            <path style="fill:#283238;" d="M41.545,10.5H26v37h15.545c1.908,0,3.455-1.547,3.455-3.455V13.955 C45,12.047,43.453,10.5,41.545,10.5z"/> 
                            <rect x="24" y="10.5" style="fill:#546A79;" width="2" height="37"/> 
                            <path style="fill:#546A79;" d="M9,43.5c-0.553,0-1-0.447-1-1v-7c0-0.553,0.447-1,1-1s1,0.447,1,1v7C10,43.053,9.553,43.5,9,43.5z"/> <path style="fill:#546A79;" d="M41,23.5c-0.553,0-1-0.447-1-1v-7c0-0.553,0.447-1,1-1s1,0.447,1,1v7C42,23.053,41.553,23.5,41,23.5z "/> <circle style="fill:#FFFFFF;" cx="37" cy="22.5" r="1"/> </g>
                    </svg>
                    <img class="tv-static" src="/src/assets/static.gif"/>
                    <span class="countdown" :title="countdown">
                        {{ countdown }}
                    </span>
                    <span class="countdown-label">Days Hours Minutes Seconds</span>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  show: Boolean
})

const targetTime = new Date("Nov 10, 2023 00:00:00");
let countdown = ref("");

function startCountDown() {
    const timeNow = new Date().getTime();
    const timeDifference = targetTime - timeNow;
    const millisecondsInOneSecond = 1000;
    const millisecondsInOneMinute = millisecondsInOneSecond * 60;
    const millisecondsInOneHour = millisecondsInOneMinute * 60;
    const millisecondsInOneDay = millisecondsInOneHour * 24;
    const differenceInDays = timeDifference / millisecondsInOneDay;
    const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
    const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
    const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
    const remainingDays =  (Math.floor(differenceInDays) < 10) ? `0${Math.floor(differenceInDays)}` : Math.floor(differenceInDays);
    const remainingHours = (Math.floor(remainderDifferenceInHours) < 10) ? `0${Math.floor(remainderDifferenceInHours)}` : Math.floor(remainderDifferenceInHours);
    const remainingMinutes = (Math.floor(remainderDifferenceInMinutes) < 10) ? `0${Math.floor(remainderDifferenceInMinutes)}` : Math.floor(remainderDifferenceInMinutes);
    const remainingSeconds = (Math.floor(remainderDifferenceInSeconds) < 10) ? `0${Math.floor(remainderDifferenceInSeconds)}` : Math.floor(remainderDifferenceInSeconds);

    countdown.value = remainingDays + " : " + remainingHours + " : " + remainingMinutes + " : " + remainingSeconds;
}

setInterval(() => { startCountDown() }, 500);

</script>


<!-- <style>
.title {
    color: #333;
}
</style>

<template>
    <h1 class="title" @click="showCountDown = true" >CountDown</h1>
    <Content :show="showCountDown" @close="showCountDown = false"/>
</template>
  
<script setup>
import { ref } from 'vue';
import Content from './CountDown/Content.vue';

const showCountDown = ref(false);
</script> -->