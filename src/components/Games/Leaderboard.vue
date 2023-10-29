<style scoped>
*{
    font-family: 'Times New Roman', Times, serif
}
h1{
    font-family: Canopee;
    font-size: 4em;
    text-align: center;
}
th{
    font-size: 3.5em;
}
th,td{
    border: 1px solid #1d1d1b;
    text-transform: uppercase;
    text-align: center;
    padding: 10px;
    font-size: 2.5em;
}

</style>
<template>
    <Header/>
    
    <div class="w-1/2 mx-auto flex items-center flex-col">
        <h1 class="mb-12">Leaderboard</h1>
        <table>
            <thead>
                <th>Team</th>
                <th>Points</th>
            </thead>
            <tbody>
                
                <tr v-for="(team, index) in sortedTeams" :key="index">
                    <td><h3>{{ team.team_name }}</h3></td>
                    <td>{{ team.totalPoints }}</td>
                </tr>
                
            </tbody>
        </table>
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

