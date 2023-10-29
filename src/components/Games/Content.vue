<style>
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
</style>

<template>
    <Header/>
    <div class="paper-bg"></div>
    <div class="banner-img h-screen">
        <img src="../../assets/img/shaktiman.png" alt="" srcset="">
    </div>
    <div class="tagline">
        <div class="tag">
            <a href="/games/vertle">
                Guess today's word in vertle!!
            </a>
        </div>
    </div>
    <h1 class="m-[20px] text-7xl text-center">Games</h1>
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