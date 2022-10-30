// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let water = 400;
let milk = 540;
let coffee = 120;
let cups = 9;
let money = 550;

function remainCoffee(water, milk, coffee, cups, money) {
    console.log("\nThe coffee machine has:");
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${coffee} g of coffee beans`);
    console.log(`${cups} disposable cups`);
    console.log(`$${money} of money`);
}

function tasteCoffee(minusWater, minusCoffee, plusMoney, minusMilk = 0) {
    minusWater = water - minusWater;
    minusCoffee = coffee - minusCoffee;
    plusMoney = money + plusMoney;
    minusMilk = milk - minusMilk;

    let min = Math.min(minusWater, minusCoffee, plusMoney, minusMilk);

    if(min < 0) {
        console.log("Sorry, not enough water!");
        return;
    } else {
        water = minusWater;
        coffee = minusCoffee;
        money = plusMoney;
        milk = minusMilk;
        cups--;
        console.log("I have enough resources, making you a coffee!");
    }
}

function  buyCoffe() {
    console.log("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
    let sortOfCoffee = input();
    switch (sortOfCoffee) {
        case '1':
            tasteCoffee(250, 16, 4);
            break;
        case '2':
            tasteCoffee(350, 20, 7, 75);
            break;
        case '3':
            tasteCoffee(200, 12, 6, 100);
            break;
        case "back":
            break;
    }
}

function fillMachine() {
    console.log("\nWrite how many ml of water you want to add:");
    let addedWeter = Number(input());
    water += addedWeter;

    console.log("Write how many ml of milk you want to add:");
    let addedMilk = Number(input());
    milk += addedMilk;

    console.log("Write how many grams of coffee beans you want to add:");
    let addedCoffee = Number(input());
    coffee += addedCoffee;

    console.log("Write how many disposable cups you want to add: ");
    let addedCups = Number(input());
    cups += addedCups;

}

function takeMoney() {
    console.log(`I gave you $${money}`);
    money = 0;
}

function doAction() {
    console.log("\nWrite action (buy, fill, take, remaining, exit):");
    action = input();
    switch (action) {
        case "buy":
            buyCoffe();
            break;
        case "fill":
            fillMachine();
            break;
        case "take":
            takeMoney();
            break;
        case "remaining":
            remainCoffee(water, milk, coffee, cups, money);
            break;
        case "exit":
            return false;
            break;
    }
    return true;
}

while (true) {
    if (!doAction()) break;
}
