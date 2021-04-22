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

module.exports = {
  green: green,
  red: red,
  yellow: yellow
};
