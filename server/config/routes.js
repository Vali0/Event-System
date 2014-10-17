var auth = require('./auth'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/register', controllers.users.getRegister);
    app.post('/register', controllers.users.postRegister);

    app.get('/login', controllers.users.getLogin);
    app.post('/login', auth.login);
    app.get('/logout', auth.logout);

    app.get('/profile', auth.isAuthenticated, controllers.users.getProfile);
    app.put('/profile', auth.isAuthenticated, controllers.users.updateProfile);

    app.get('/active', auth.isAuthenticated, controllers.events.getActiveEvents);
    app.get('/active/:id', auth.isAuthenticated, controllers.events.getEventInfo);
    app.get('/past', auth.isAuthenticated, controllers.events.getPastEvents);
    app.get('/create', auth.isAuthenticated, controllers.events.getCreateEventForm);
    app.post('/create', auth.isAuthenticated, controllers.events.createEvent);
    app.put('/active/:id', auth.isAuthenticated, controllers.events.joinEvent);

    app.get('/', controllers.events.getHomePage);
    app.get('*', controllers.events.getHomePage);

//    app.get('/', function(req, res) {
//        res.render('index', {currentUser: req.user});
//    });


};