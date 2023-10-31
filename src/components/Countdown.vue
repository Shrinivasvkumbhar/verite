<style>
/* @import './styles.scss'; */

.content-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #161616;
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
  transform: rotatey(35deg);
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
       
        <div  class="content-mask tv-mask"  ref="tv">
            <div class="content">
                  <!-- <audio controls autoplay>
                    <source src="../assets/music/Doordarshan.mp3" type="audio/mpeg">
                  </audio> -->
                <div class="television">
                   <img  @click="closeAnimation()" src="../assets/img/tv-dark.png" alt="" class="television">
                    <!-- <img class="tv-static" src="/src/assets/gif/glitch.gif"/> -->
                    <span class="countdown" :title="countdown">
                        {{ countdown }}
                    </span>
                    <span class="countdown-label"></span>
                    
                </div>
            </div>
        </div>
</template>

<script >
import { ref,onMounted } from 'vue';
import { gsap } from 'gsap';
import { Howl } from 'howler';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default{
  data()
  {
    return{
      isAudioInitialized:false,
      sound:null,
    }
  },
mounted(){
  this.timer()
  const tv = document.querySelector(".television");
 document.addEventListener("mousemove",()=>{
  //this.initializeAudioContext();
 })
  gsap.fromTo(
    tv,
    {
      opacity: 0,

    },
    {
      opacity: 1,

      duration: 4,
      delay: 0.5,
      stagger: 0.4,
    }
  );
},
methods:{
  initializeAudioContext() {
    console.log("play");
      if (!this.isAudioInitialized) {
        
        this.sound = new Howl({
          src: ['src/assets/music/Doordarshan.mp3'],
          autoplay: true,
          loop: true,
          volume: 0.5,
        });
        this.isAudioInitialized=true;
        console.log("playing...");
      }
      
    },
    closeAnimation() {
      const tv = document.querySelector(".tv-mask");
 
      gsap.to(tv, {
        scale: 3,
        duration: 2,
        top:"95%",
        left:"90%",
        onComplete: () => {
          this.$emit('close')
          if (this.sound) {
            this.sound.pause();
          }
        },
      });
     
    },

  timer()
  {
    setInterval(() => { this.startCountDown() }, 500);
  },

  startCountDown() {
    const targetTime = new Date("Nov 10, 2023 00:00:00");
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
    
    const timer=document.querySelector('.countdown');
    if(timer!=null)
      timer.innerHTML = `
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
}
}
</script>

