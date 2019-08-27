const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const IconeLinkController = require('./controllers/IconeLinkController');

routes.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

routes.get('/', (request, response)=>{

    return response.json({message: 'Hello World'});
});



routes.post('/icone-link-create', IconeLinkController.create);
routes.get('/icone-link-show',IconeLinkController.show)


routes.post('/user-create', UserController.create);
routes.get('/show-users', UserController.show);
// routes.post('/auth', UserController.auth);


module.exports = routes;