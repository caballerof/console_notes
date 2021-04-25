const fs = require('fs');
const colors = require('./colors');
const color = require('./colors');

// TODO: add date to note register and show it.
// TODO: add command to clear all notes.

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');

    return JSON.parse(dataBuffer.toString());    
  } catch (error) {
    return [];
  }  
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
  
  color.green('Note saved...');
};

/**
 * Add a new note to the array (list) of notes. It check if there is a node
 * with the same title, if not add a new node.
 * 
 * @param {String} title Title for the note.
 * @param {String} body Content of the note.
 * @returns `null`
 */
const addNote = ({title, body}) => {
  const notes = loadNotes();
  const hasDuplicate = notes.find(note => note.title === title);
  
  debugger

  if (hasDuplicate) {
    color.red('Note title taken!');

    return;
  }
  
  notes.push({
    title,
    body
  });

  saveNotes(notes);  
};

/**
 * Remove a note from the list using title to find a match.
 * @param {String} title Used to remove the note from the list. 
 * @returns `null`
 */
const removeNote = ({title}) => {
  const notes = loadNotes();

  color.yellow(`Removing "${title}" from notes`);

  const filteredNotes = notes.filter((note) => note.title !== title);

  if (filteredNotes.length < notes.length) {    
    saveNotes(filteredNotes);
    return;
  } 

  color.red(`Title: "${title}" not found`);
};

/**
 * List all notes saved. 
 * Output on terminal.
 */
const listNotes = () => {
  const notes = loadNotes();

  colors.green('All saved notes');

  notes.forEach((note, index) => {
    colors.title(`${index + 1}. ${note.title}`);
    colors.body(note.body);
  });
};

/**
 * Find a note by title.
 * @param {String} title String to find a note by title param.
 * @returns `null`
 */
const readNote = ({title}) => {
  const notes = loadNotes();  

  const noteFinded = notes.find((note) => note.title.toLowerCase() === title.toLowerCase());

  if (noteFinded) {
    colors.title(`${noteFinded.title}`);
    colors.body(noteFinded.body);

    return;
  }

  colors.yellow('Title not found');
};

module.exports = {  
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
