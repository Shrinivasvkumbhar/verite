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
</style>

<template>
    <Header/>
  <h1 class="m-[40px] text-8xl text-center">Games</h1>
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