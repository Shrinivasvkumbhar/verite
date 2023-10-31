<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');


*{
    font-family: 'Times New Roman', Times, serif
}
h1{
    font-family: Canopee;
    z-index: -1;
}

.table-container {
    width: 80%; 
    border-radius: 25px;
    box-shadow: 0px 5px 10px #0006;
    overflow: hidden;
    margin-top: 30px;
}

.table {
    width: 100%;
    background-image: url('https://img.freepik.com/premium-photo/old-paper-texture-background_118047-1365.jpg?w=2000');
    text-align: center;
    font-size: 2vw;
}

.table-header {
    background: url('https://thumbs.dreamstime.com/b/seamless-gold-leaf-background-texture-shiny-golden-yellow-crumpled-metallic-foil-repeat-pattern-modern-abstract-luxury-gilded-age-250179993.jpg');
    height: 5vw;    
    box-shadow: 0px 5px 5px #0003;  
    border-bottom: 1px solid #0003; 
    animation: brightglow 4s infinite; 
}

.table-header th {
    font-family: Canopee;
}

.table-body td,h3 {
    font-family: Allura;
    font-weight: bolder;
    font-size: 3.4vw;
    color: #025;
}

.table-body tr {
    height: 80px;
}

.table-body td {
    border-bottom: 3px dotted #0005;
}

.table-body td:last-child {
    border-left: 3px double #0005
}
.table-body tr:last-child {
    border-bottom: 3px solid transparent;
}

@keyframes brightglow {
    0% {
        filter: brightness(1);
    }

    50% {
        filter: brightness(1.15);
    }

    100% {
        filter: brightness(1);
    }
    
}


@media screen and (max-width: 500px){
    td{
        font-size: 1.8em !important;
    }
    td h3{
        font-size: 1.1em !important;
    }
    th{
        padding: 10px;
        font-size: 1.8em;
    }
}
</style>
<template>
    <Header/>
    <div class="paper-bg"></div>
    <div class="banner-img w-screen absolute">
        <img class="shadow" src="../../assets/img/trophy.png" alt="" srcset="">
    </div>
    <div class="w-3/4 mx-auto flex items-center flex-col  mt-[32%] sm:mt-[30%] mb-12">
        <h1 class="mt-7 mb-12 text-[10vw] text-center sm:text-7xl ">Leaderboard</h1>
        <div class="table-container sm:!w-[100%]">
            <table class="table sm:!text-lg">
                <thead class="table-header">
                    <th></th>
                    <th style="text-align: left;">Team</th>
                    <th>Points</th>
                </thead>
                <tbody class="table-body">
                    
                    <tr v-for="(team, index) in sortedTeams" :key="index">
                        <td style="font-size: 2.5vw;">{{ index+1 }}.</td>
                        <td style="text-align: left;"><h3>{{ team.team_name }}</h3></td>
                        <td>{{ team.totalPoints }}</td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
import { ref,computed } from 'vue';
import { collection, query, getDocs, orderBy, onSnapshot,getFirestore,doc } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Header from '../Navigation/Header.vue';
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
const analytics = getAnalytics(app);
export default {
    setup() {
        const teams = ref([]);
        const db = getFirestore(app);
        const fetchTeams = async () => {
            const gameRef = doc(db, 'games', 'game 1');
            const teamsCollectionRef = collection(gameRef, 'teams');
            const [teamSnapshot, gamesSnapshot] = await Promise.all([getDocs(teamsCollectionRef), getDocs(collection(db, 'games'))]);

            const teamsData = [];
            const gamesData = {};

            await Promise.all(gamesSnapshot.docs.map(async (gameDoc) => {
                const gameId = gameDoc.id;
                const teamsCollectionRef = collection(doc(db, 'games', gameId), 'teams');
                const querySnapshot = await getDocs(teamsCollectionRef);
                gamesData[gameId] = { ...gameDoc.data(), scores: querySnapshot.docs.map(doc => ({ [doc.id]: { team_name: doc.data().team_name, points: doc.data().points } })) };
            }));

            teamSnapshot.forEach((doc) => {
                const teamData = doc.data();
                let totalPoints = 0;

                for (const gameId in gamesData) {
                    const game = gamesData[gameId];
                    const teamScore = game.scores.find(score => score[doc.id]);
                    if (teamScore) {
                        totalPoints += teamScore[doc.id].points;
                    }
                }
                teamData.totalPoints = totalPoints;
                teamsData.push(teamData);
            });

            teams.value = teamsData;
        };




        fetchTeams();

        const sortedTeams = computed(() => {
            return teams.value.sort((a, b) => b.totalPoints - a.totalPoints);
        });
        return { sortedTeams,teams };
    },
    components: { Header }
};
</script>

