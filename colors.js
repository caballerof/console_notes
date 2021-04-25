const chalk = require('chalk');

// Colors
const green = function (msg) {
  console.log(chalk.green(msg));
};

const red = function (msg) {
  console.log(chalk.red(msg));  
};

const yellow = function (msg) {
  console.log(chalk.yellow(msg));  
};

const title = (msg) => {
  console.log(chalk.blue.underline.bold(msg));  
};

const body = (msg) => {
  console.log(chalk.cyan(`  ${msg}`));  
};

module.exports = {
  green: green,
  red: red,
  yellow: yellow,
  title: title,
  body: body
};
