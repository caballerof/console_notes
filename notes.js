const fs = require('fs');
const color = require('./colors');

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');

    return JSON.parse(dataBuffer.toString());    
  } catch (error) {
    return [];
  }  
}

const saveNotes = function (notes) {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
  
  color.green('Note saved...');
};

const getNotes = function () {
  return 'Your notes...'
}

/**
 * Add a new note to the array (list) of notes.
 * @param {String} title Title for the note.
 * @param {String} body Content of the note.
 * @returns 
 */
const addNote = function ({title, body}) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(note => {
    return note.title === title;
  });
  
  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });
  
    saveNotes(notes);

    return;
  }
  
  color.red('Note title taken!');
};

/**
 * Remove a note from the list using title to find a match.
 * @param {String} title Used to remove the note from the list. 
 * @returns 
 */
const removeNote = function ({title}) {
  const notes = loadNotes();

  color.yellow(`Removing "${title}" from notes`);

  const filteredNotes = notes.filter(note => note.title !== title);

  if (filteredNotes.length < notes.length) {    
    saveNotes(filteredNotes);
    return;
  } 

  color.red(`Title: "${title}" not found`);
};

module.exports = {
  getNotes: getNotes, 
  addNote: addNote,
  removeNote: removeNote
};
