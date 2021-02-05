// const readline = require('readline-sync');

const inquirer = require('inquirer');

async function getIMC() {
  // let weight = readline.questionFloat('Type your weight:');

  // let height = readline.questionFloat('Type your height:');

  const inputs = await inquirer.prompt([
    {name: 'weight', type: 'input', message: 'Type your weight:'},
    {name: 'height', type: 'input', message: 'Type your height:'},
  ]);
  
  let weight = inputs.weight;
  
  let height = inputs.height;

  let IMC = parseFloat((weight / (height * height)).toFixed(2));

  console.log('Your IMC is %s', IMC);

  if (IMC < 18.5) console.log('Your are underweight');
  else if (IMC >= 18.5 && IMC < 25) console.log('Your are at normal weight');
  else if (IMC >= 25 && IMC < 30) console.log('Your are overweight');
  else if (IMC >= 30 && IMC < 35) console.log('Your are at grade I obesity');
  else if (IMC >= 35 && IMC < 40) console.log('Your are at grade II obesity');
  else console.log('Your are at grade III obesity or more');

  return;
}

getIMC();
