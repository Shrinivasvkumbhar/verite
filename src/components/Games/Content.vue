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
    margin-top: 40px;
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
        <card class="card sm:w-[90%]"
        v-for="(game, index) in games"
        :key="index"
        :game="game"
        />
    </div>    
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdVa3kY-11_jpsT_Fw6wBXPq4BBm7M_0g",
    authDomain: "verite-45774.firebaseapp.com",
    projectId: "verite-45774",
    storageBucket: "verite-45774.appspot.com",
    messagingSenderId: "340822673051",
    appId: "1:340822673051:web:254f4d49dca48aef7ce83e",
    measurementId: "G-K8G599E418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import Card from './Card.vue'
import games from '../../utils/games.json'
import Header from '../Navigation/Header.vue';

import { getFirestore, collection, getDocs,doc} from 'firebase/firestore';
const db = getFirestore(app);
export default {
    components: {
    Card,
    Header
},
    data() {
        return {
            games: null,
        };
    },
    mounted()
    {
        this.fetchGames()
    },
    methods:
    {
        
        async fetchGames() {
            const gamesCol = await collection(db, 'games');
            const response = await getDocs(gamesCol);
            const gamesData = [];

            await Promise.all(response.docs.map(async (document) => {
                const teamsCollectionRef = collection(doc(db, 'games', document.id), 'teams');
                const querySnapshot = await getDocs(teamsCollectionRef);
                const gameData = {
                    id: document.id,
                    name: document.data().game_name,
                    poster: document.data().game_poster,
                    rules: document.data().rules,
                    scores: querySnapshot.docs.map(team => ( { team_name: team.data().team_name, points: team.data().points } )).sort((a, b) => b.points - a.points)
                };
                gamesData.push(gameData);
            }))

            this.games = gamesData;
            
        }
    },
}
</script>