const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/home.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/about.html');
});

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/works.html');
});

app.get('/photos', (request, response, next) => {
    console.log(__dirname);
    response.sendFile(__dirname + '/public/views/photos.html');
});

app.listen(3000, () => console.log('Server running on port 3000!'));