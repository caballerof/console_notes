const chalk = require('chalk');
const { describe } = require('yargs');
const yargs = require('yargs');

// Colors
const green = function (msg) {
  console.log(chalk.green(msg));
};

const red = function (msg) {
  console.log(chalk.red(msg));
};

chalk.green;

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new node',
  handler: function () {
    green('Adding!');
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove node',
  handler: function () {
    red('Node removed!');
  }
});

// Create add command
yargs.command({
  command: 'list',
  describe: 'Show a list of nodes',
  handler: function () {
    green('Listing nodes!');
  }
});

// Create add command
yargs.command({
  command: 'read',
  describe: 'Read a node',
  handler: function () {
    green('Reading node!');
  }
});

console.log(yargs.argv);
