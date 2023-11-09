// Create web server

// import modules
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set static files
app.use(express.static('public'));

// set routes
app.use('/', require('./routes/index'));
app.use('/comments', require('./routes/comments'));

// listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
