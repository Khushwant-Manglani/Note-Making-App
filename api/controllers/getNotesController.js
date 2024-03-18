const Note = require('../models/note');

const getNotesHandler = async (req, res) => {
  const notes = await Note.find();
  if(!notes) {
    res.status(401).json({ message: "Notes not present." });
  } else {
    res.status(200).json(notes);
  }
}

module.exports = getNotesHandler;
