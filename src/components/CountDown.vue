<style>
/* @import './styles.scss'; */

.tv-content-mask {
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

.tv-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: rgb(208, 208, 208); */
  font-family: 'Times New Roman', Times, serif;
}

.tv-content:before {
  opacity: 0;
}

.tv-content:after {
  opacity: 0;
}

.television {
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  user-select: none;
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

.door-img {
  position: absolute;
  top: 20%;
  left: 15.5%;
  scale: 0.3;
  transform: rotatey(35deg);
  filter: brightness(2);
  filter: grayscale(2%);
  filter: drop-shadow(-8px -18px 30px rgb(24, 46, 84));
}

.tv-static {
  position: absolute;
  z-index: -1;
  top: 45%;
  left: 22.5%;
  scale: 4;

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
  color: rgb(33, 13, 218);
  text-shadow: 0px 0px 200px #2281ad,
    0px 0px 100px #3e4dc6,
    0px 0px 25px rgba(15, 39, 91, 0.667);

}

.television a {
  color: rgb(117, 107, 207);
  font-size: larger;
}

@keyframes glitch {

  2%,
  64% {
    transform: translate(0px, 2px) skew(0deg);
  }

  4%,
  60% {
    transform: translate(0px, -2px) skew(0deg);
  }

  62% {
    transform: translate(0, 0) skew(5deg);
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

  2%,
  64% {
    transform: translate(2px, -2px);
  }

  4%,
  60% {
    transform: translate(-2px, 2px);
  }

  62% {
    transform: translate(13px, -1px) skew(-50deg);
  }
}

.countdown:after {
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 80% 67%, 80% 70%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 80% 67%, 80% 70%, 0 100%);
}

@keyframes glitchBotom {

  2%,
  64% {
    transform: translate(-2px, 0);
    transform: rotatey(15deg);

  }

  4%,
  60% {
    transform: translate(-2px, 0);
    transform: rotatey(15deg);

  }

  62% {
    transform: translate(-22px, 5px) skew(21deg);
    transform: rotatey(15deg);

  }
}

.show-time {
  display: flex;
  flex-direction: row;
  align-items: start;
  transform: rotatey(35deg);
  font-size: 6.5vw;
  position: relative;
  left: -10%;
}

.time,
.label {
  text-align: center;

}

.label {
  font-size: large;
  writing-mode: vertical-lr;
  text-orientation: upright;
  letter-spacing: -0.2em;
  height: 20px;
  text-align: center;
  margin-top: 45px;
}
@media screen and (max-width:500px) {
  .countdown{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .show-time{
    flex-direction: row;
     font-size: 2em;
     justify-content: center;
  }
  
.label {
  font-size: 1em;
  writing-mode: horizontal-tb;
  text-orientation: upright;
  letter-spacing: 0em;
  height: 20px;
  text-align: center;
  margin-top: 0px;
  margin-left: 5px;
}
  
}
/* .countdown-enter-from {
  opacity: 0;
}

.countdown-leave-to {
  opacity: 0;
}

.countdown-enter-from .tv-content,
.countdown-leave-to .tv-content {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
} */
</style>

<template>
  <div class="tv-content-mask tv-mask" ref="tv">
    <div class="tv-content">
      <!-- <audio controls autoplay>
                    <source src="../assets/music/Doordarshan.mp3" type="audio/mpeg">
                  </audio> -->
      <div  class="television">
        <img @click="closeAnimation()" src="../assets/gif/tv-static.gif" class="tv-static sm:opacity-30" alt="" srcset="">
        <img @click="closeAnimation()" src="../assets/img/tv-dark-2.png" alt="" class="television sm:hidden" >
        <!-- <img class="tv-static" src="/src/assets/gif/glitch.gif"/> -->
        <span class="countdown">

        </span>
        <img src="../assets/img/Doordarshan.png" class="door-img sm:top-0" alt="">
        <h4 class="absolute bottom-0 z-50"><a @click="initializeAudioContext" class="z-50 relative">Click for music</a></h4>
      </div>
    </div>
  </div>
</template>

<script >
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { Howl } from 'howler';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      isAudioInitialized: false,
      sound: null,
    }
  },
  mounted() {
    this.timer()
    const tv = document.querySelector(".television");
    document.addEventListener("mousemove", () => {
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
  methods: {
    initializeAudioContext() {
      console.log("play");
      if (!this.isAudioInitialized) {

        this.sound = new Howl({
          src: ['src/assets/music/Doordarshan.mp3'],
          autoplay: true,
          loop: false,
          volume: 0.5,
        });
        this.isAudioInitialized = true;
        console.log("playing...");
      }

    },
    closeAnimation() {
      const tv = document.querySelector(".tv-mask");

      gsap.to(tv, {
        scale: 3,
        duration: 2,
        top: "95%",
        left: "90%",
        onComplete: () => {
          this.$emit('close')
          if (this.sound) {
            this.sound.pause();
          }
        },
      });

    },

    timer() {
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
      const remainingDays = (Math.floor(differenceInDays) < 10) ? `0${Math.floor(differenceInDays)}` : Math.floor(differenceInDays);
      const remainingHours = (Math.floor(remainderDifferenceInHours) < 10) ? `0${Math.floor(remainderDifferenceInHours)}` : Math.floor(remainderDifferenceInHours);
      const remainingMinutes = (Math.floor(remainderDifferenceInMinutes) < 10) ? `0${Math.floor(remainderDifferenceInMinutes)}` : Math.floor(remainderDifferenceInMinutes);
      const remainingSeconds = (Math.floor(remainderDifferenceInSeconds) < 10) ? `0${Math.floor(remainderDifferenceInSeconds)}` : Math.floor(remainderDifferenceInSeconds);

      const timer = document.querySelector('.countdown');
      if (timer != null)
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

