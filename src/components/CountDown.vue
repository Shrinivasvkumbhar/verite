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
    height: 100vh;
    width:100vw;
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
  /* animation: glitch 1s linear infinite; */
  color: snow;
  display: flex;
  color:rgb(14, 249, 14);
  text-shadow: 0px 0px 200px #BEB5AB,
                    0px 0px 100px #BEB5AB,
                    0px 0px 25px #FFFA;

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
    transform: rotatey(15deg);

  }
  4%,60%{
    transform: translate(-2px,0);
    transform: rotatey(15deg);

  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
    transform: rotatey(15deg);

  }
}
.show-time{
  display: flex;
  flex-direction: row;
  align-items: start;
  transform: rotatey(25deg);
  font-size:6.5vw;
  position: relative;
  left: -10%;
}
.time,.label{
  text-align: center;
  
}
.label{
  font-size: x-large;
 writing-mode: vertical-lr;
 text-orientation: upright;
  letter-spacing: -0.2em;
 height: 20px;
 text-align: center;
 margin-top: 45px;
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
    <Transition name="countdown" >
        <div v-if="show" class="content-mask"  ref="tv">
            <div class="content">
                <div class="television">
                   <img  @click="$emit('close')" src="../assets/img/tv-dark.jpg" alt="" class="television">
                    <!-- <img class="tv-static" src="/src/assets/gif/glitch.gif"/> -->
                    <span class="countdown" :title="countdown">
                        {{ countdown }}
                    </span>
                    <span class="countdown-label"></span>
                    
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import { gsap } from 'gsap';
// import { Howl } from 'howler';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const props = defineProps({
  show: Boolean
})

const targetTime = new Date("Nov 10, 2023 00:00:00");
;

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
    document.querySelector('.countdown').innerHTML = `
    <div class="show-time">
        <div class="time">
          ${remainingDays}
        </div>
        <div class="label">
          DAYS
        </div>
    </div>
    <div class="show-time">
        <div class="time">
          ${remainingHours}
        </div>
        <div class="label">
          HRS
        </div>
    </div>
    <div class="show-time">
        <div class="time">
          ${remainingMinutes}
        </div>
        <div class="label">
          MINS
        </div>
    </div>
    <div class="show-time">
        <div class="time">
          ${remainingSeconds}
        </div>
        <div class="label">
          SECS
        </div>
    </div>`;
}

setInterval(() => { startCountDown() }, 500);

    // Close animation
    // function closeAnimation() {
    //   gsap.to([tv, timer], {
    //     scale: 0,
    //     duration: 1,
    //     onComplete: () => {
    //       sound.stop();
    //     },
    //   });
    // }

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