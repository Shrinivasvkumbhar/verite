<style scoped>
.teams-content {
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Canopee;
}

.team-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 3vw;
    margin-top: 50px;
}

.team-logo {
    width: auto;
    height: 400px; 
}

.team-about {
    padding: 10px 20px;
    margin: 10px;
    background-color: #111;
    color: snow;
}

.team-name {
    font-size: 2.4vw;
    background-color: #222;
    padding: 0 10px;
}

.team-tagline {
    padding: 5px 10px;
    font-size: 1.5vw;
}

.captain-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    align-self: center;
    justify-self: center;
}

.captain-card {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    width: 100%;
}

.captain-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
    filter: grayscale(100%);
}

.captain-info {
    font-size: 14px;
    color: #333;
}

.captain-name {
    font-weight: bold;
    font-size: 3vw;
}

.captain-position {
    color: #CCC;
    font-size: 2.2vw;
    background-color: #0009;
    padding: 15px;
    backdrop-filter: blur(20px);
    box-shadow: 0px 5px 25px #0009;
}

.members {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px;
    margin-top: 80vh;
    flex-direction: column;
    background-color: #000A;
    color: #DDC;
    padding: 50px;
    backdrop-filter: blur(30px);
    box-shadow: 0px -5px 45px #000C;
}

.member-card {
    background-color: #111;
    color: snow;
    padding: 10px;
}

/* .member-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
} */

.members-header {
    font-size: 4vw;
}

.member-card img {
    width: 80px;
    height: 80px;
    /* border-radius: 50%; */
    border: 1px solid #222;
    margin-bottom: 10px;
    filter: grayscale(100%);
}

.member-name {
    font-size: 1.5vw;
    /* text-align: center; */
    /* width: 100px; */
    padding: 5px;
    border-bottom: 1px solid rgba(255, 250, 250, 0.373);
}

.captain-image {
    position: absolute;
    top: 0;
    z-index: -1;
}

.members-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

</style>

<template>
    <Header/>
    <div class="teams-content">
        <div class="team-header">
            <img :src="team.logo" class="team-logo" alt="Logo"/>
            <div class="team-about">
                <div class="team-name">{{ team.name.toUpperCase() }}</div>
                <div class="team-tagline">{{ team.tagline }}</div>
            </div>
        </div>
        <img :src="team.captainImage" alt="Captain" class="captain-image"/>
        <div class="captain-cards">
            <div v-for="(captain, ind) in team.captains" :key="ind" class="captain-card">
            <div class="captain-info">
                <div class="captain-name">{{ captain.name.toUpperCase() }}</div>
                <div class="captain-position">Team Captain</div>
            </div>
            </div>
        </div>
        <div class="members">
            <div class="members-header">
                <h2>Team Members</h2>
            </div>
            <div class="members-list">
                <div v-for="(member, mIndex) in team.members" :key="mIndex" class="member-card">
                    <!-- <img src="/sooper-11.png" alt="Member" /> -->
                    <div class="member-name">{{ member.name.toUpperCase() }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../Navigation/Header.vue';
import teams from "../../utils/teams_details.json";

export default {
    components: {
        Header,
    },
    data() {
        return {
            team: {},
        };
    },
    created() {
        const name = this.$route.params.name;
        this.team = teams.find((team) => team.name == name);
    },
}
</script>