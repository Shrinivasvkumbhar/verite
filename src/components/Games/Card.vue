<style>
/* Style the card component */
.card {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #CEC5BB;
  border-radius: 25px;
  width: 100%;
  border: 1px solid #DED5CB;
  box-shadow: -10px 10px 50px #0002;
}

/* Style the image container with overlay text */
.card-image-container {
  position: relative;
}

/* Style the card image */
.card-image {
  width: 100%;
  max-width: 300px;
  height: auto;
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
  height: 200px;
  width: 100%;
  margin-left: 40px;
  text-align: left;
}

/* Style the title */
.card-title {
  font-size: 24px;
  font-weight: bold;
}

/* Style the description */
.card-description {
  font-size: 16px;
}

.details-btn{
  border: 2px solid #222;
  color: #222;
  height: 40px;
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
            <p class="no-of-participants">Deadline: {{ game.date }}</p>
            <button class="details-btn" @click="showModal = true">Details</button>
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