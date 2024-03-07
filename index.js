//nodeproject00
//CLI calculator 
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`Lets start calculation`);
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.blue(`
    _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `));
}
await welcome();
async function askquestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: ("Which function do you want to perform?  \n"),
            choices: ["Addition", "Multiplication", "Substraction",
                "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1:",
            // validate:(input:!number)=>{
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2:",
        },
    ]);
    if (answers.operator == "Addition") {
        console.log(chalk.red(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.red(`${answers.num1} * ${answers.num2}  = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "Substraction") {
        console.log(chalk.red(`${answers.num1}-${answers.num2}=${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.red(`${answers.num1}/${answers.num2}=${answers.num1 / answers.num2}`));
    }
    else if (answers.num1 == !"number") {
        console.log(`${answers.num1} is invalid`);
    }
}
async function startagain() {
    do {
        await askquestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue?  \n Press y or n: "
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "YES"
        || again.restart == "yes");
}
startagain();
