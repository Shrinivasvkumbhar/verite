<style scoped>
.marquees {
  display: flex;
  align-items: right;
  justify-content: center;
  padding: 50px 100px 0 0;
  height: 700px;
  margin-left: -5%;
}

.marquee {
  width: 25vw;
  overflow: hidden;
  padding: 15px;
}

.marquee-item {
  display: flex;
  align-items: center;
  animation: marquee-animation 10s linear infinite;
  padding-bottom: 5px;
}

.up {
  animation-direction: normal;
}

.down {
  animation-direction: reverse;
}

@keyframes marquee-animation {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-200%);
  }
}
</style>

<template>
  <div class="marquees">
    <div class="marquee">
      <div v-for="(image, index) in upImages" :key="index" class="marquee-item up">
        <img :src="image" alt="Up Marquee" />
      </div>
    </div>
    <div class="marquee">
      <div v-for="(image, index) in downImages" :key="index" class="marquee-item down">
        <img :src="image" alt="Down Marquee" />
      </div>
    </div>
  </div>
</template>

<script>
import data from "../utils/data.json"
export default {
  data() {
    return {
      data: data,
      upImages: data.upImages,
      downImages: data.downImages,
    };
  },
};
</script>