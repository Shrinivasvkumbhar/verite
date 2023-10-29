<style scoped>
* {
    font-family: 'Times New Roman', Times, serif
}

h1 {
    font-family: Canopee;
    font-size: 3em;
    text-align: center;
    margin-bottom: 20px;
}

button {
    text-transform: uppercase;
    background-color: #1d1d1b;
    color: #cdc6be;
    padding: 10px;
}

input,
select {
    background-color: #705b4631;
    padding: 10px;
    color: #1d1d1b;
    font-size: 1.5em;
    margin-bottom: 20px;
    outline: none;
}

input::placeholder {

    color: #4b4b4a;
}

label {
    font-size: 1.5em;
    padding: 10px;
    font-weight: 500;
}
</style>
<template>
    <Header/>
    <div class="paper-bg"></div>
    <div class="w-1/2 mx-auto my-10 border-[#1d1d1b] border-[1px] border-solid p-10 sm:w-[80%]">
        <h1>Login</h1>
        <div class="flex flex-col">
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button @click="login">Login</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Header from '../Navigation/Header.vue';
import { useRouter } from 'vue-router';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';
export default {
    setup() {
        const router = useRouter()
        const email = ref('');
        const password = ref('');
        const login = () => {

            let isAuthenticated=false
            const auth = getAuth();
            setPersistence(auth, browserSessionPersistence);
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then(() => {
                isAuthenticated=true
                console.log('User logged in successfully');
            })
                .catch((error) => {
                alert(error.message);
            });
            if(!isAuthenticated)
               {
                console.log("pushing");
                router.push('/admin');
               }
        };
        return { email, password, login };
    },
    components: { Header }
};
</script>

