const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://site-pop-pe:site-pop-pe@pop-pe-crfuj.mongodb.net/site?retryWrites=true&w=majority',
                 
{useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);

