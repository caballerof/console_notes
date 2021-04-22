const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add note command
yargs.command({
  command: 'add',
  describe: 'Add a new node',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    const {title, body} = argv;
    notes.addNote({title, body});
  }
});

// Create remove note command
yargs.command({
  command: 'remove',
  describe: 'Remove node',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    const {title} = argv;
    notes.removeNote({title});
  }
});

// Create list notes command
yargs.command({
  command: 'list',
  describe: 'Show a list of nodes',
  handler: function () {
    console.log('Listing nodes!');
  }
});

// Create read note command
yargs.command({
  command: 'read',
  describe: 'Read a node',
  handler: function () {
    console.log('Reading node!');
  }
});

yargs.parse();
