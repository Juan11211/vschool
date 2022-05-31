// inputting userName info and storing it.
var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name?");
console.log(userName + " Welcome, to planet Nebuella!");

// an array of weapons.
const weapons = [" Knife ", " SlingShot ", " Axe "];

// prize for winning
let prizesFound = ["$50,000", "Brand New Car", "trip to Paris"];

let gameEnded = false;

// creating player 1
function Player(name, hp, weapons) {
  this.name = name;
  this.hp = hp;
  this.weapons = weapons;
  this.prizes = [];
  this.attack = function () {
    return Math.floor(Math.random() * 3);
  };
}
// player 1
let player1 = new Player(userName, 10, weapons);

// creating eniminies
function Enemy(name, hp) {
  this.name = name;
  this.hp = hp;
 this.attack = function () {
   return Math.floor(Math.random() * 4);
   };
}

// var of enemin
let enemy1 = new Enemy("Thanos", 10);
let enemy2 = new Enemy("Modok", 10);
let enemy3 = new Enemy("Green Goblin", 10);

const enemies = [enemy1, enemy2, enemy3]; 

// choosing what option you want to do
console.log(
  "Enjoy your stay at Planet Nebuella! Please be aware of the evil villians!"
);
while (!gameEnded) {
  var options = readlineSync.keyIn(
    " /n Do you want to walk? Press [w]. /n Do you want to fight? Press [f]. Check weapons bag? Press [i]. To end the game press [x] Press [p] to check player stats."
  );
  if (options === "w") {
    console.log("Lets walk");
    walk();
  } else if (options === "x") {
    console.log("OH! YOU'RE TRAPPED, GOODLUCK LEAVING PLANET NEBUELLA");
  } else if (options === "i") {
    console.log(
      `You have the following weapons in your bag ${userName.weapons}`
    );
    inventory();
  } else if (options === "f") {
    let enemies = ["Thanos", "Modok", "Green Goblin"];
    var battle = readlineSync.keyIn(
      `Who do you choose to battle? \n ${enemy1.name} Press [t] \n ${enemy2.name} Press [m] \n ${enemy3.name} Press [g]`
    );
    fight();
  } else if (options === "p") print();
}

// different kinds of option functions
function print() {
  console.log(player1.name);
  console.log(" Health " + player1.hp);
  console.log(" Inventory " + player1.weapons);
}

function inventory() {
  console.log(weapons);
}

function walk() {
  let walking = Math.floor(Math.random() * 8);
  // players randomly attacking eachother
  if (walking === 1) {
    enemy1.hp -= player1.attack();
    console.log(`Whoa! You just ran into Thanos! You attacked Thanos!`);
    console.log(` Health ${player1.hp} \n Enemy Health ${enemy1.hp}`);
  } else if (walking === 2) {
    enemy2.hp -= player1.attack();
    console.log(`Whoa! is that Modok? You attacked Modok!`);
    console.log(` Player Health ${player1.hp} \n Enemy Health ${enemy2.hp}`);
  } else if (walking === 3) {
    enemy3.hp -= player1.attack();
    console.log(`Whoa! is that Green Goblin? You attacked Green Goblin!`);
    console.log(` Player Health ${player1.hp} \n Enemy Health ${enemy3.hp}`);
  } else if (walking === 4) {
    player1.hp -= enemy1.attack();
    console.log("DAMN, THANOS ATTACKED YOU");
    console.log(` Enemy Health ${enemy1.hp} \n Player Health ${player1.hp} `);
  } else if (walking === 5) {
    player1.hp -= enemy2.attack();
    console.log("DAMN, MODOK ATTACKED YOU");
    console.log(` Enemy Health ${enemy2.hp} \n Player Health ${player1.hp} `);
  } else if (walking === 6) {
    player1.hp -= enemy3.attack();
    console.log("DAMN, GOBLIN ATTACKED YOU");
    console.log(` Enemy Health ${enemy3.hp} \n Player Health ${player1.hp} `);
  }
  // encounting no villians.
  else if (walking === 0 || walking === 7 || walking === 8) {
    console.log(
      ` good job ${userName} \n you're walking through a safe passage...`
    );
  }
  // death of players
  if (player1.hp <= 0) {
    gameEnded = true;
    console.log("You gave it your all, Good luck next time...");
  } else if (enemy1.hp <= 0 || enemy2.hp <= 0 || enemy3.hp <= 0) {
    gameEnded = true;
    let prizes = prizesFound[Math.floor(Math.random() * 3)];
    player1.prizes.push(prizes);
    console.log(player1.prizes);
    console.log(` Good job ${userName} \n you just earned a ${prizes} `);
  }
}

function fight() {
  while (player1.hp > 0 || enemy1.hp > 0) {
    if (Math.random() < 0.5) {
      player1.hp -= enemy1.attack();
      console.log("\n Enemy attakced player ");
      console.log(`\n Player hp: ${player1.hp}\n Enemy hp: ${enemy1.hp}`);
    } else {
      enemy1.hp -= player1.attack();
      console.log("\n Player attacked enemy");
      console.log(`\n Player hp: ${player1.hp}\n Enemy hp: ${enemy1.hp}`);
    }
    if (player1.hp <= 0) {
        gameEnded = true;
        console.log("You gave it your all, Good luck next time...");
        break;
      } else if (enemy1.hp <= 0) {
        gameEnded = true;
        let prizes = prizesFound[Math.floor(Math.random() * 3 )];
        player1.prizes.push(prizes);
        console.log(player1.prizes);
        console.log(` Good job ${userName} \n you just earned a ${prizes} `);
        break;
      }
  }
   while (player1.hp > 0 || enemy2.hp > 0) {
     if (Math.random() < 0.5) {
       player1.hp -= enemy2.attack();
       console.log("\n Enemy attacked player ");
       console.log(`\n Player hp: ${player1.hp}\n Enemy hp: ${enemy2.hp}`);
       } else {
         enemy2.hp -= player1.attack()
       console.log(" \n Player attacked enemy")
       console.log(`\n Player hp: ${player1.hp}\n Enemy hp: ${enemy2.hp}`);
     }
    if (player1.hp <= 0) {
         gameEnded = true;
         console.log("You gave it your all, Good luck next time...");
         break;
       } else if (enemy2.hp <= 0) {
         gameEnded = true;
         let prizes = prizesFound[Math.floor(Math.random() * 3 )];
         player1.prizes.push(prizes);
         // console.log(player1.prizes);
         console.log(` Good job ${userName} \n you just earned a ${prizes} `);
         break;
       }
   }
   while (player1.hp > 0 || enemy3.hp > 0) {
    if (Math.random() < 0.5) {
      player1.hp -= enemy3.attack();
      console.log("\n Enemy attacked player ");
      console.log(`\n Player hp: ${player1.hp}\n Enemy hp: ${enemy3.hp}`);
      } else {
        enemy3.hp -= player1.attack()
      console.log(" \n Player attacked enemy")
      console.log(`\n Player hp: ${player1.hp}\n Enemy hp: ${enemy3.hp}`);
    }
   if (player1.hp <= 0) {
        gameEnded = true;
        console.log("You gave it your all, Good luck next time...");
        break;
      } else if (enemy3.hp <= 0) {
        gameEnded = true;
        let prizes = prizesFound[Math.floor(Math.random() * 3 )];
        player1.prizes.push(prizes);
        // console.log(player1.prizes);
        console.log(` Good job ${userName} \n you just earned a ${prizes} `);
        break;
      }
  }
}
