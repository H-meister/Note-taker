//require stuff that the machine needs
const routes = require ('./routes/index');
const express = require('express');
//{PORT} requres port 80 for heroku or whetever else it requires if not default port 3001
const PORT = process.env.PORT || 3001;
const app = express();
//stuff I need to POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//to get everything including css when loading HTML from public folder
app.use(express.static('public'));
//my routes:)
app.use('/', routes);
//init the server on port 3001 or whatever it requires
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

