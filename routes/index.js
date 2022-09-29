//Things this app will require!
const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const data = require('../db/db.json')
//creating function to add notes~
function createNote(body, noteList){
    const newNote = body;
    if(!Array.isArray(noteList))
        noteList = [];
    noteList.forEach(() => body.id = noteList.length);

    noteList.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(noteList, null, 2)
    );
    return newNote;
    
}
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
});
//this is to post notes
router.post('/api/notes', (req, res) => {
    const newNote = createNote(req.body, data);
    res.json(newNote);
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

//sends it to server.js to read and execute
module.exports = router;