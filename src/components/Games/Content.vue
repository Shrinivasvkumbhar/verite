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
  background-color: #222;
  color: #eee;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  position: sticky;
  top: 100px;
  z-index: 5;
}

.tag {
    font-family: Canopee;
    font-size: 2.5vw;
    animation: marquee 20s linear infinite;
}

.tagline:hover {
  animation: glow 1s infinite ease-in-out;
}

.tag a {
    color: #CCB;
}

@keyframes glow {
    0%{
        
  background-color: #222;

    }
    50% {
        background-color: #40403A;
        box-shadow: 0px 5px 30px #FFF8;

    }
    100% {

    }
    
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
    <div class="tagline z-2 relative cursor-pointer">
        <div onclick="window.location.href='games/vertle'" class="tag z-50">
            <a href="/games/vertle">
                Guess today's word in vertle!!
            </a>
        </div>
    </div>

    <div class="paper-bg"></div>
    <div class="banner-img w-screen absolute">
        <img src="../../assets/img/shaktiman.png" class="shadow" alt="" srcset="">
    </div>
    <h1 class="m-[20px] text-[10vw] text-center mt-[32%] sm:text-7xl sm:mt-[30%]">Games</h1>
    
    <div class="flex flex-col w-screen justify-center items-center mt-10">
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