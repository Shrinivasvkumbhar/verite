<style scoped>
.title {
    font-size: xx-large;
    padding: 20px;
}
.sc-content {
    /* background: snow; */
    background-image: "paper-bg-2.jpg";
    color: #333;
}

.grid {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.character-container {
    padding: 10px;
    margin: 5px;
    min-width: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    /* border-radius: 50%; */
    /* background: #333;
    color: snow; */
}

.keyboard {
    margin: 50px;
}

.row {
    display: flex;
    align-items: center;
    justify-content: center;
}

.key {
    padding: 10px;
    margin: 5px;
    min-width: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
}
@media screen and (max-width: 500px){
    .key{
        padding: 5px!important;
        min-width: 28px;
    min-height: 28px;
    }
}
</style>

<template>
    <div class="sc-content">
        <h1 class="title">V E R T L E</h1>
        <div class="grid" v-for="x in chances" :key="x">
            <div class="character-container" v-for="(char, y) in code" :id="x * code.length + y">
                {{ inp[x * code.length + y] }}
                <!-- <div v-if="currIndex == (x * code.length + y)">
                    {{ inp[x * code.length] }}
                </div> -->
            </div>
        </div>
        <div class="keyboard sm:w-full">
            <div class="row">
                <span class="key" v-for="key in keys[0]" :id="key" @click="addChar">
                {{ key }}
                </span>
            </div>
            <div class="row">
                <span class="key" v-for="key in keys[1]" :id="key" @click="addChar">
                {{ key }}
                </span>
            </div>
            <div class="row">
                <span class="key" v-for="key in keys[2]" :id="key" @click="addChar">
                {{ key }}
                </span>
                <span class="key" @click="deleteChar">Del</span>
                <span class="key" @click="validateInput">OK</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import data from "../../utils/data.json";

const date = new Date().getDate().toString();

const code_str = data["words"][date];
const n = code_str.length;

const code = Array.from(code_str, char => char.toUpperCase());;
const chances = [0, 1, 2, 3, 4, 5, 6, 7];
const keys = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], ['Z', 'X', 'C', 'V', 'B', 'N', 'M']] // , '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
console.log(code);

import { ref } from 'vue';

let chance = 0;
let isValidated = false;
let isGameOver = false;

let greenLetters = []
let yellowLetters = []
let greenIndices = []
let yellowIndices = []

const currIndex = ref(-1);
const inp = ref([]);

// const letter = ref("O");

function addChar(e) {
    if(isGameOver) return;
    if(((currIndex.value) % code.length == code.length - 1) && !isValidated) return;
    currIndex.value += 1;
    inp.value = [...inp.value, ...e.target.innerHTML];
    console.log(currIndex.value, chance);
}

function deleteChar() {
    if(isGameOver) return;
    if((currIndex.value + 1) / code.length == chance) {
        return;
    }
    currIndex.value -= 1;
    if((currIndex.value + 1) % code.length == 0) isValidated = true;
    inp.value = inp.value.slice(0, -1);
    console.log(currIndex.value, chance);
}

function validateInput() {
    if((currIndex.value+1) % code.length != 0)
        return;

    greenIndices = [];
    greenLetters = [];
    yellowIndices = []
    yellowLetters = [];

    let ind = (currIndex.value + 1) - code.length;
    const user_inp = inp.value.slice(ind, currIndex.value + 1);
    const user_inp_str = user_inp.join("");
    // if(!user_inp_str.includes(five)) {
    //     console.log("here");
    //     return;
    // }

    for(let i = 0; i < code.length; i++) {
        for(let j = 0 ; j < code.length; j++) {
            if(code[i] === user_inp[j]) {
                if(i == j) {
                    if(!greenIndices.includes(ind + j)) {
                        if(!yellowLetters.includes(user_inp[j])) {
                            yellowLetters = yellowLetters.filter(l => l != user_inp[j]);
                            yellowIndices = yellowIndices.filter(i => i != (ind + j))
                        }
                        greenIndices.push(ind + j);
                        if(!greenLetters.includes(user_inp[j])) {
                            greenLetters.push(user_inp[j]);
                        }
                    }
                }
                else {
                    if(!yellowLetters.includes(user_inp[j])) {
                        yellowIndices.push(ind + j);
                        if(!yellowLetters.includes(user_inp[j])) {
                            yellowLetters.push(user_inp[j]);
                        }
                    }
                }
            }
        }
    }

    user_inp.forEach((key) => {
        document.getElementById(key).style.backgroundColor = "lightgrey";
    })

    yellowIndices.forEach((value) => {
        const index = value.toString();
        document.getElementById(index).style.backgroundColor = "orange";
    });
    yellowLetters.forEach((key) => {
        document.getElementById(key).style.backgroundColor = "orange";
    });

    greenIndices.forEach((value) => {
        const index = value.toString();
        document.getElementById(index).style.backgroundColor = "lightgreen";
    });
    greenLetters.forEach((key) => {
        document.getElementById(key).style.backgroundColor = "lightgreen";
    });

    chance += 1;
    isValidated = true;

    if(greenIndices.length == code.length || chances == 8) {
        isGameOver = true;
    }
    // console.log(user_inp);
}

document.addEventListener('keydown', (e) => {
    console.log(`isGameOver: ${isGameOver}`);
    if(isGameOver) {
        return;
    }

    const alphabetRegex = /^[A-Za-z]$/;
    if(e.key == "Backspace") {
        deleteChar();
    }
    else if(e.key == "Enter") {
        // console.log((currIndex.value+1) % code.length);
        if((currIndex.value+1) % code.length == 0) {
            validateInput();
        }
    }
    else if (alphabetRegex.test(e.key)) {
        if(((currIndex.value) % code.length == code.length - 1) && !isValidated) {
            return;
        }
        isValidated = false;
        currIndex.value += 1;
        inp.value = [...inp.value, ...e.key.toUpperCase()];
        console.log(currIndex.value, chance);
    }

}, false);
</script>

<!-- if((currIndex.value+1) % code.length != 0)
        return;

    fm.value = new Map();
    nm.value = new Map();
    let ind = (currIndex.value + 1) - code.length;
    const user_inp = inp.value.slice(ind, currIndex.value + 1);
    for(let i = 0; i < code.length; i++) {
        for(let j = 0 ; j < code.length; j++) {
            if(code[i] === user_inp[j]) {
                if(i == j) {
                    if(!nm.value.has(user_inp[j])) {
                        if(fm.value.has(user_inp[j])) {
                            console.log("here " + i + " " + j + " " + fm.value[user_inp[j]]);
                            fm.value[user_inp[j]] = [...fm.value[user_inp[j]], (ind + j)];
                        }
                        nm.value.set(user_inp[j], ind + j);
                    }
                }
                else {
                    if(!nm.value.has(user_inp[j])) {
                        if(!fm.value.has(user_inp[j])) {
                            fm.value.set(user_inp[j], ind + j);
                        }
                    }
                }
            }
        }
    }

    user_inp.forEach((key) => {
        document.getElementById(key).style.backgroundColor = "lightgrey";
    })

    nm.value.forEach((value, key) => {
        console.log(key + ": " + value);
        const index = value.toString();
        document.getElementById(index).style.backgroundColor = "lightgreen";
        document.getElementById(key).style.backgroundColor = "lightgreen";
    });

    fm.value.forEach((value, key) => {
        console.log(key + ": " + value);
        const index = value.toString();
        document.getElementById(index).style.backgroundColor = "lightyellow";
        document.getElementById(key).style.backgroundColor = "lightyellow";
    });

    chance += 1;
    isValidated = true;
    // console.log(user_inp); -->