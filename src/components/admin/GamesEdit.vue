<style scoped>
*{
    font-family: 'Times New Roman', Times, serif
}
h1{
    font-family: Canopee;
    font-size: 3em;
}
button{
    text-transform: uppercase;
    background-color: #1d1d1b;
    color: #cdc6be;
    padding: 10px;
}

input,select{
    background-color: #705b4631;
    padding: 10px;
    color: #1d1d1b;
    font-size: 1.5em;
    margin-bottom: 20px;
    outline: none;
}
input::placeholder{
   
    color: #4b4b4a; 
}
label{
    font-size: 1.5em;
    padding: 10px;
    font-weight: 500;
}
th{
    font-size: 1.5em;
}
th,td{
    border: 1px solid #1d1d1b;
}
td input{
    margin: 0;
    height: 100%;
}
</style>
<template>

        <Header/>
        <div class="w-[90%] mx-10 my-12 relative">
        <button class="absolute right-0 top-0" @click="logout">Logout</button>
        <h1>ADD GAMES</h1>
        <div class="flex flex-col w-1/2">
            <input v-model="gameName" placeholder="Game Name" class="outline-none"/>
            <input type="file" accept="image/*" @change="onFileChange"/>
            <Editor  v-model="rulesEditor" placeholder="Format Rules here"/>
            <button @click="addGame">Add Game</button>
        </div>
      </div>
      <div class="w-[90%] mx-10">
        <h1>ADD/CHANGE POINTS</h1>
        
        <form @submit.prevent="addPoints">
          <label for="game">Select Game:</label>
          <select v-model="selectedGame" id="game" @change="fetchTeams">
           
            <option v-for="game in games" :key="game.id" :value="game.id">{{ game.name }} </option>
          </select>
          <table>
                <thead>
                    <th>Team</th>
                    <th>Points</th>
                </thead>
                <tbody>
                    <tr v-for="team in teams" :key="team.id">
                        <td><label :for="'team_' + team.id">{{ team.team_name }}</label></td>
                        <td><input :id="'team_' + team.id" type="number" v-model="team.points" /></td>
                    </tr>
                </tbody>
            </table>
          <button class="mt-4" type="submit">Submit</button>
        </form>
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
const analytics = getAnalytics(app);
import { ref, onMounted } from 'vue';
import Header from "../Navigation/Header.vue";
import { getFirestore, collection, getDocs,doc,updateDoc,setDoc } from 'firebase/firestore';
import teamsData from '../../utils/teams.json';
import { getAuth, signOut } from 'firebase/auth';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';
import {  ref as storageRef, uploadBytes, getDownloadURL,getStorage } from "firebase/storage";
import { useRouter } from 'vue-router';
import Editor from 'primevue/editor';
const db = getFirestore(app);
const storage = getStorage(app);
export default {
    setup() {
         const auth = getAuth();
          const router = useRouter();
        setPersistence(auth, browserSessionPersistence);
        const gameName = ref('');
        const games = ref([]);
        const teams = ref([]);
        const selectedGame = ref('game 1');
        const rulesEditor = ref(null);
        const gamePoster = ref(null);
        
        const onFileChange = (e) => {
            const file = e.target.files[0];
            gamePoster.value = file;
        };

        const logout=async ()=> {
           
           
            try {
                await signOut(auth);
                console.log('User signed out successfully');
                router.push('/')
            } catch (error) {
                console.error('Error signing out:', error);
            }
        }
        const fetchGames = async () => {
            const gamesCol = await collection(db,'games');
            const response=await getDocs(gamesCol);
            games.value = response.docs.map((doc) => {
                return {
                    id: doc.id,
                    name: doc.data().game_name,
                };
            });
        };

        const fetchTeams = async () => {
            const gameRef = doc(db, 'games',selectedGame.value);
            const teamsCollectionRef = collection(gameRef, 'teams');
            const querySnapshot = await getDocs(teamsCollectionRef);
            teams.value = querySnapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    team_name: doc.data().team_name,
                    points: doc.data().points,
                };
            });
        };

        const addPoints = async () => {
            console.log(selectedGame.value);
            teams.value.forEach(async (team) => {

                const gameRef = doc(db, 'games', selectedGame.value);
                const teamRef = doc(gameRef, 'teams', team.id);
                await updateDoc(teamRef, {
                    points: team.points,
                });
            });
        };
        // const addGame = async () => {
        //     const gamesRef = collection(db, 'games');
        //     const gameDocRef = doc(gamesRef, gameName.value);
        //     await setDoc(gameDocRef, { game_name: gameName.value });

        //     const teams = teamsData.teams;

        //     teams.forEach(async (team) => {
        //         const gameCol = collection(gameDocRef, 'teams');
        //         const teamDocRef = doc(gameCol, team.team_id);
        //         await setDoc(teamDocRef, { team_name: team.team_name, points: team.points });
        //     });

        //     // Clear input field after adding the game
        //     gameName.value = '';
        //     fetchGames()
        //     fetchTeams()
        // };
        const addGame = async () => {
            const gamesRef = collection(db, 'games');
            const gameDocRef = doc(gamesRef, gameName.value);
            await setDoc(gameDocRef, { game_name: gameName.value });

            if (gamePoster.value) {
                const posterRef = storageRef(storage, `game_posters/${gameDocRef.id}`);
                await uploadBytes(posterRef, gamePoster.value);
                const posterUrl = await getDownloadURL(posterRef);
                await updateDoc(gameDocRef, { game_poster: posterUrl });
            }

            if (rulesEditor.value) {
                const gameRules = rulesEditor.value;
                await updateDoc(gameDocRef, { rules: gameRules });
            }

            const teams = teamsData.teams;

            teams.forEach(async (team) => {
                const gameCol = collection(gameDocRef, 'teams');
                const teamDocRef = doc(gameCol, team.team_id);
                await setDoc(teamDocRef, { team_name: team.team_name, points: team.points });
            });

            // Clear input field after adding the game
            gameName.value = '';
            fetchGames();
            fetchTeams();
        };

        onMounted(() => {
            fetchGames();
            fetchTeams();
        });

        return {
            games,
            teams,
            selectedGame,
            gameName,
            gamePoster,
            rulesEditor,
            addPoints,
            addGame,
            fetchTeams,
            logout,
            onFileChange
        };
    },
    components:{Header,Editor}
};
</script>