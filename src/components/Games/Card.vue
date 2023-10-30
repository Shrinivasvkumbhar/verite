<style>
/* Style the card component */
.card {
  display: flex;
  text-align: center;
  background-image: url('https://cdn.creazilla.com/illustrations/1797652/old-paper-texture-background-illustration-md.jpeg');
  border-radius: 25px;
  width: 100%;
  border: 1px solid #775;
  box-shadow: -10px 10px 50px #0002;
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
  font-size: 22px;
}

.card-deadline {
  font-size: 18px;
}

.details-btn {
  border: 1px solid #000A;
  color: #222;
  height: 40px;
  width: 100%;
  margin-top: 20px;
}
.details-btn:hover {
  background: #222;
  color: #DDD;
}

</style>

<template>
    <div class="card" id="show-modal">
        <!-- Image at the top with overlay text -->
        <div class="card-image-container">
            <img :src="game.image" alt="Card Image" class="card-image" />
            <!-- <span class="overlay-text">The Game</span> -->
        </div>

        <!-- Left-aligned details -->
        <div class="card-details">
            <h2 class="card-title">{{ game.name }}</h2>
            <p class="card-description">{{ game.about }}</p>
            <div>
              <p class="card-deadline">Deadline {{ game.date }}</p>
              <button class="details-btn" @click="showModal = true">Details</button>
            </div>
        </div>


        <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <modal :show="showModal" @close="showModal = false">
            <template #header>
            <h2>{{game.name}}</h2>
            </template>
            <template #body>
              <img :src="game.image"/>
                <!-- <h4>{{game.about}}</h4>
                <p v-for="(rule, ind) in game.rules">
                    {{ ind+1 }}. {{ rule }}
                </p> -->
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