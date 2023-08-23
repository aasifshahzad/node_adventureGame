import chalk from "chalk"               // loading required modules
import inquirer from "inquirer"


class Player {              // Player Class declaration
    name: string            // Player properties
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease(quantity: number) {        // Player methods
        let fuel = this.fuel - quantity;
        this.fuel = fuel;
    }
    fuelIncrease() {                         // Player method
        this.fuel = 100;
    }
}
class Opponent {                               //Opponent Class
    name: string                                //Opponent properties
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }

    fuelDecrease(quantity: number) {              //Opponent methods
        let fuel = this.fuel - quantity;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}


let player = await inquirer.prompt(             // User to input player name
    {
        type: "input",
        message: "Enter the Player name: ",
        name: "name"
    }
);
//console.log(player.name);

let opponent = await inquirer.prompt(           //User to select Opponent type
    {
        type: "list",
        message: "Select the Opponent name: ",
        name: "select",
        choices: ["Krakow", "Taboo", "Nardoo"]
    }
);
//console.log(opponent.select);

let p1 = new Player(player.name);                   // storing player and opponent in a variable
//console.log(p1);

let o1 = new Opponent(opponent.select);
//console.log(o1);

console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)} `);// player VS opponent

if (opponent.select == "Krakow") { // less difficult opponent
    do {
        let ask = await inquirer.prompt(
            {
                type: "list",
                message: "Select action:",
                name: "action",
                choices: ["Attack", "Drink", "Run", "Stop"]
            }
        );
        if (ask.action == "Attack") {  //asking user to select the actions
            console.log("Attack");
            let num = Math.floor(Math.random() * 2)   // getting 1 or 0 to update fuel and randomness in game
            //console.log(num);

            if (num > 0) { // num is greater then 0 player fuel will decrease by 5
                p1.fuelDecrease(5)  //quantity of fuel to be decrease
                console.log(chalk.bold.green(`${p1.name} Fuel: ${p1.fuel}`)); 
                console.log(chalk.bold.red(`${o1.name} Fuel: ${o1.fuel}`));
                if (p1.fuel <= 0) {   //if player fuel equals or less than 0, terminate the game
                    console.log(`${p1.name} loose! Best of luck for next time.`);
                    process.exit()
                }

            }
            if (num <= 0) {    //num is smaller then 0 opponent fuel will decrease by 5
                o1.fuelDecrease(5) //quantity of fuel to be decrease
                console.log(chalk.bold.green(`${p1.name} Fuel: ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} Fuel: ${o1.fuel}`));
                if (o1.fuel <= 0) {     //if opponent fuel equals or less than 0, terminate the game
                    console.log(`${o1.name} loose! Best of luck for next time.`);
                    process.exit()
                }
            }
        }
        if (ask.action == "Drink") { // recharge the fuel of both player and opponent to play more 
            p1.fuelIncrease()
            console.log(chalk.bold.green(`${p1.name} Fuel: ${p1.fuel}`));
            o1.fuelIncrease()
            console.log(chalk.bold.green(`${o1.name} Fuel: ${p1.fuel}`));
        }
        if (ask.action == "Stop") {
            console.log("Game Exit");
            process.exit()

        }

    } while (true)
}
if (opponent.select == "Taboo") {// more difficult opponent
    do {
        let ask = await inquirer.prompt(
            {
                type: "list",
                message: "Select action:",
                name: "action",
                choices: ["Attack", "Drink", "Run", "Stop"]
            }
        );
        if (ask.action == "Attack") {
            console.log("Attack");
            let num = Math.floor(Math.random() * 2)
            //console.log(num);

            if (num > 0) {
                p1.fuelDecrease(10)
                console.log(chalk.bold.green(`${p1.name} Fuel: ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} Fuel: ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(`${p1.name} loose! Best of luck for next time.`);
                    process.exit()
                }

            }
            if (num <= 0) {
                o1.fuelDecrease(10)
                console.log(chalk.bold.green(`${p1.name} Fuel: ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} Fuel: ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(`${o1.name} loose! Best of luck for next time.`);
                    process.exit()
                }
            }
        }
        if (ask.action == "Drink") {
            p1.fuelIncrease()
            console.log(chalk.bold.green(`${p1.name} Fuel: ${p1.fuel}`));
            o1.fuelIncrease()
            console.log(chalk.bold.green(`${o1.name} Fuel: ${p1.fuel}`));
        }
        if (ask.action == "Stop") {
            console.log("Game Exit");
            process.exit()

        }

    } while (true)
}
if (opponent.select == "Nardoo") {  //most difficult opponent of game
    do {
        let ask = await inquirer.prompt(
            {
                type: "list",
                message: "Select action:",
                name: "action",
                choices: ["Attack", "Drink", "Run", "Stop"]
            }
        );
        if (ask.action == "Attack") {
            console.log("Attack");
            let num = Math.floor(Math.random() * 2)
            //console.log(num);

            if (num > 0) {
                p1.fuelDecrease(20)
                console.log(chalk.bold.green(`${p1.name} Fuel: ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} Fuel: ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(`${p1.name} loose! Best of luck for next time.`);
                    process.exit()
                }

            }
            if (num <= 0) {
                o1.fuelDecrease(20)
                console.log(chalk.bold.green(`${p1.name} Fuel: ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} Fuel: ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(`${o1.name} loose! Best of luck for next time.`);
                    process.exit()
                }
            }
        }
        if (ask.action == "Drink") {
            p1.fuelIncrease()
            console.log(chalk.bold.green(`${p1.name} Fuel: ${p1.fuel}`));
            o1.fuelIncrease()
            console.log(chalk.bold.green(`${p1.name} Fuel: ${p1.fuel}`));
        }
        if (ask.action == "Stop") {
            console.log("Game Exit");
            process.exit()

        }

    } while (true)
}


