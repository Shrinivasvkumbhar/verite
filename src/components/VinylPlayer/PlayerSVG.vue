<script>
import data from "../../utils/data.json";

export default {
  data() {
    return {
      audio: new Audio(),
      isPlaying: false,
      resumePosition: 0,
      data: data,
      date: new Date().getDate().toString()
    };
  },
  methods: {
    toggleAudio() {
      console.log(data.music, this.date);
      if (this.isPlaying) {
        this.audio.pause();
        this.resumePosition = this.audio.currentTime;
      } else {
        this.audio.src = data.music[this.date];
        if(this.audio.paused) {
          this.audio.currentTime = this.resumePosition;
          this.audio.play();
        }
        else
          this.audio.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  },
  mounted() {
    // Listen for the 'ended' event to reset the playback position when the audio finishes
    this.audio.addEventListener('ended', () => {
      this.resumePosition = 0;
      this.isPlaying = false;
    });
  },
};
</script>

<style>
.svg-player {
    width: 50vw;
    clip-path: inset(0 0 0 40%);
    margin-left: -40%;
}

.player-on {
    position: absolute;
    transition: transform 0.3s ease-in-out;
    transform: translateX(2%);
}

.light-on {
    /* fill:red; */
}

#groove {
  transition: transform 1s ease;
  transform-box: fill-box;
  transform-origin: center !important;
}

.spin-groove {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.cls-1 {
fill: none;
}

.cls-1, .cls-2, .cls-3 {
stroke: #000;
stroke-miterlimit: 10;
}

.cls-2 {
fill: #e6e6e6;
}

.cls-4 {
fill: #333;
}

.cls-3 {
fill: #9e005d;
}

.cls-5 {
fill: gray;
}

.cls-6 {
fill: #999;
}

.cls-7 {
fill: #ccc;
}

.cls-8 {
fill: #b3b3b3;
}

.cls-9 {
fill: #754c24;
}

.cls-10 {
fill: #f2f2f2;
}
</style>

<template>
  <div class=""></div>
<svg id="Layer_2" class="svg-player" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 977 764.5">
  <g id="Layer_2-2" data-name="Layer 2">
    <g>
      <rect class="cls-9" y="2.5" width="977" height="762" rx="63.89" ry="63.89"/>
      <rect class="cls-7" x="35" y="43.5" width="914" height="680" rx="33" ry="33"/>
      <rect class="cls-6" x="90" y="100.5" width="795" height="560" rx="29.19" ry="29.19"/>
      <rect class="cls-10" x="768" y="154.5" width="96" height="482"/>
      <image width="761" height="760" href="../../assets/svg/vinylplayer/Disc.svg" alt="Groove"/>
      <image width="761" height="760" id="groove" :class="{'spin-groove': isPlaying}" href="../../assets/svg/vinylplayer/Groove.svg" alt="Groove"/>
      <!-- <image width="761" height="760" id="groove" :class="{'spin-groove': isPlaying}" href="../../assets/img/disc.png" alt="Groove"/> -->
      <circle class="cls-7" cx="390" cy="380.5" r="125"/>
      <path class="cls-5" d="M534,574.5l55-41-11-21,15-9,13,17s14-9,25-19,28-34,28-34l27,16s-23,37-24,41-2,17,4,23,13,14,13,14l-21-12c-7-4-32,6-51,17s-53,29-53,29l-20-21Z"/>
      <polygon class="cls-2" points="662.54 469.6 791 259.5 810 270.5 682.09 481.18 662.54 469.6"/>
      <rect class="cls-4" x="809.69" y="128.5" width="59.62" height="152" rx="18.35" ry="18.35" transform="translate(238.69 -416.47) rotate(32.26)"/>
      <rect class="cls-8" x="836" y="334.5" width="10" height="175"/>
      <rect class="cls-4" x="830" y="369.88" width="23" height="32.24" rx="6.77" ry="6.77"/>
      <rect class="cls-8" x="796" y="583.5" width="45" height="14"/>
      <rect class="cls-4" @click="toggleAudio" :class="{'player-on': isPlaying}" x="796" y="575.5" width="28" height="31" rx="8.45" ry="8.45"/>
      <circle class="cls-3" :class="{'light-on': isPlaying}" cx="848.5" cy="73.5" r="7"/>
    </g>
  </g>
</svg>
</template>