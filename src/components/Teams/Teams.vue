<style scoped>
@import url("styles.css");
</style>

<template>
    <Header/>
    <div class="teams">
        <div class="title text-[10vw]  sm:text-7xl">TEAMS</div>
        <div class="content">
            <div class="team-card" v-for="(team, index) in teams">
                <div class="team-signature">
                    <img class="team-logo" :src="team.logo" :alt="team.name"/>
                    <div class="team-about">
                        <router-link :to="'/team/' + team.name">
                            <div class="team-name">{{ team.name.toUpperCase() }}</div>
                        </router-link>
                        <div class="team-tagline">{{ team.tagline }}</div>
                    </div>
                </div>
                <div class="team-captains">
                    <div class="captain-card" v-for="(captain) in team.captains">
                        <div class="captain-name">{{ captain.name.toUpperCase() }}</div>
                        <img class="captain-img" src="/pager.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import Header from '../Navigation/Header.vue';
  import teams from "../../utils/teams_details.json";
  import Team from './Team.vue';
  
  export default {
    data() {
        return {
            teams: teams,
            activeTeam: Object
        };
    },
    components: {
      Header,
      Team
    },
    methods: {
      showTeamDetails(index) {
        this.activeTeam = this.teams[index];
      },
    },
  };
  </script>
  