let xp = 0;
let health = 100;
let gold = 50;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: ""
    },
    {
        
    }
];

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goTown(){
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the \"town Square\".";//escaping \ \ \
    console.log("Going to Town...");
}

function goStore(){
    button1.innerText = "Buy 10 halth(10 gold)";
    button2.innerText = "Buy weapon(30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the Store";
    console.log("Going to Store...");
}

function goCave(){
    console.log("Going to Cave...");
}

function fightDragon(){
    console.log("Fighting with Dragon...");
}

function buyHealth(){

}

function buyWeapon(){

}

function goTown(){

}