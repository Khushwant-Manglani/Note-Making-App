const Note = require('../models/note');

function getCurrDate() {
  const d = new Date();
  const date = d.getDate(), month = d.getMonth(), year = d.getMonth(); 
  return [date, month, year].join('/');
}

const postNoteHandler = async (req, res) => {
  const { title, description } = req.body;
  if(!title || !description) {
    res.status(401).json({ message: "Invalid credentials." });
  } else {

    const note = await Note.create({
      title: title,
      description: description,
      date: getCurrDate()
    });

    res.json(note);
  }
}

module.exports = postNoteHandler;
