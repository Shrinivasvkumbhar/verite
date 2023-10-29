<style scoped>
.content {
    font-family: 'Courier New', Courier, monospace;
}

.team-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.team-logo {
    width: 120px;
    height: 120px; 
    filter: grayscale(100%);  
}

.team-about {
    padding: 10px 20px;
    margin: 10px;
    background-color: #111;
    color: snow;
}

.team-name {
    font-size: x-large;
    background-color: #222;
    padding: 0 10px;
}

.team-tagline {
    padding: 5px 10px;
}

.captain-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

.captain-card {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
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
}

.captain-position {
    color: #777;
}

.members {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px;
}

.member-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
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
    font-size: 12px;
    text-align: center;
    width: 100px;
}

</style>

<template>
    <Header/>
    <div class="content">
        <div class="team-header">
            <img :src="team.logo" class="team-logo" alt="Logo"/>
            <div class="team-about">
                <div class="team-name">{{ team.name.toUpperCase() }}</div>
                <div class="team-tagline">{{ team.tagline }}</div>
            </div>
        </div>
        <div class="captain-cards">
            <div v-for="(captain, ind) in team.captains" :key="ind" class="captain-card">
            <img src="/pager.jpg" alt="Captain" />
            <div class="captain-info">
                <div class="captain-name">{{ captain.name.toUpperCase() }}</div>
                <div class="captain-position">Team Captain</div>
            </div>
            </div>
        </div>
        <div class="members">
            <div v-for="(member, mIndex) in team.members" :key="mIndex" class="member-card">
                <img src="/sooper-11.png" alt="Member" />
                <div class="member-name">{{ member.name.toUpperCase() }}</div>
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