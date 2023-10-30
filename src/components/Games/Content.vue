<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background: red;
}

.card {
    width: 80%;
    margin: 10px;
}

.tagline {
  background-color: #333;
  color: #eee;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
}

.tag {
    animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-20%);
  }
}
h1{
    font-family: Canopee;
}
</style>

<template>
    <Header/>
    <div class="paper-bg"></div>
    <div class="banner-img w-screen absolute">
        <img src="../../assets/img/shaktiman.png" alt="" srcset="">
    </div>
    <h1 class="m-[20px] text-[10vw] text-center mt-[32%] sm:text-7xl sm:mt-[30%]">Games</h1>
    <div class="tagline z-2 relative">
        <div class="tag z-50">
            <a href="/games/vertle">
                Guess today's word in vertle!!
            </a>
        </div>
    </div>
    
    <div class="flex flex-col w-screen justify-center items-center">
        <card class="card"
        v-for="(game, index) in games"
        :key="index"
        :game="game"
        />
    </div>    
</template>

<script>
import Card from './Card.vue'
import games from '../../utils/games.json'
import Header from '../Navigation/Header.vue';

export default {
    components: {
    Card,
    Header
},
    data() {
        return {
            games: games,
        };
    }
};
</script>