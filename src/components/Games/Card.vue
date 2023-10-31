<style scoped>
/* Style the card component */
.card {
  display: flex;
  text-align: center;
  /* background-image: url('https://cdn.creazilla.com/illustrations/1797652/old-paper-texture-background-illustration-md.jpeg'); */
  background-image: url('https://img.freepik.com/premium-photo/old-paper-texture-background_118047-1365.jpg?w=2000');
  border-radius: 25px;
  width: 100%;
  border: 1px solid #775;
  box-shadow: 0px 10px 10px #0007;
}

/* Style the image container with overlay text */
.card-image-container {
  position: static;
}

/* Style the card image */
.card-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  box-shadow: 0 0 8px #000;
}

/* Style the overlay text */
.overlay-text {
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translate(20%, 20%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
}

/* Style the details on the left */
.card-details{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 40px;
  text-align: left;
  font-family: 'Times New Roman';
  gap: 20px;
  font-weight: bold;
}

/* Style the title */
.card-title {
  font-size: 3.5vw;
  font-weight: bold;
  font-family: Chomsky;
}

/* Style the description */
.card-description {
  font-size: 20px;
  font-weight: 600;
}

.card-deadline {
  font-size: 18px;
}

.details-btn {
  border: 1px solid #0003;
  color: #222;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  background-color: #FFFA;
  box-shadow: 0px 5px 15px #0004;
}
.details-btn:hover {
  background: #222;
  color: #DDD;
}

table{
  width: 100% !important;
  font-size: 2em;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
}
th,td{
  border: 1px solid #cdc6be;
}
h2{
  font-family: Chomsky;
  font-size: 3em;
  text-align: center;
}
</style>

<template>
    <div class="card sm:flex-col" id="show-modal">
        <!-- Image at the top with overlay text -->
        <div class="card-image-container">
            <img :src="game.poster" alt="Card Image" class="card-image" />
            <!-- <span class="overlay-text">The Game</span> -->
        </div>

        <!-- Left-aligned details -->
        <div class="card-details sm:!m-0">
            <h2 class="card-title sm:!text-4xl sm:mt-5">{{ game.name }}</h2>
            <p class="card-description" v-html="game.rules"></p>
            <div>
              
              <button class="details-btn" @click="showModal = true">Scores</button>
            </div>
        </div>


        <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <modal :show="showModal" @close="showModal = false">
            <template #header>
            <h2>{{game.name}}</h2>
            </template>
            <template #body>
              <table>
                <thead>
                  <th>Team</th>
                  <th>Points</th>
                </thead>
                <tbody>
                  <tr v-for="team in game.scores">
                    <td>{{ team.team_name }}</td>
                    <td>{{ team.points }}</td>
                  </tr>
                </tbody>
              </table>
            </template>
        </modal>
        </Teleport>
    </div>
</template>

<script setup>
import Modal from './Modal.vue';
import { ref } from 'vue';

const showModal = ref(false)

</script>

<script>
export default {
    components: {
        Modal
    },
  props: {
    game: Object,
  },
};
</script>