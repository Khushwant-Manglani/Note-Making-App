const express = require('express');
const router = express.Router();
const getNotesHandler = require('../controllers/getNotesController');
const postNoteHandler = require('../controllers/postNoteController');
const deleteNoteHandler = require('../controllers/deleteNoteController')

router.route('/').get(getNotesHandler).post(postNoteHandler);
router.route('/:id').delete(deleteNoteHandler);

module.exports = router;