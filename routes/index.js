const path = require('path');
const router = require('express').Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
});

//if any other link is entered redirect to index.html
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });


module.exports = router;