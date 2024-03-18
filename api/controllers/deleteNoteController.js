const Note = require('../models/note');

const deleteNoteHandler = async (req, res) => {
  const noteId = req.params.id;
  const note = await Note.findOneAndDelete({_id: noteId});
  res.json(note);
}

module.exports = deleteNoteHandler;