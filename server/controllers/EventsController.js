var events = require('../data/events'),
    CONTROLLER_NAME = 'events';

function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();

    if(dd < 10){
        dd='0'+dd
    }

    if(mm < 10){
        mm= '0'+mm
    }

    return dd + '-' + mm + '-' + yyyy;
}

module.exports = {
    getHomePage: function(req, res, next){
        {currentUser: req.user};
        events.getPast(new Date(), 0, function(err, data) {
            res.render('index', {events: data});
        });
    },
    getActiveEvents: function (req, res, next) {
        events.getActive(new Date(), req.query.page - 1, function(err, data){
            res.render(CONTROLLER_NAME + '/events', {events: data});
        });
    },
    getEventInfo: function (req, res, next) {
        events.getEventById(req.params.id, function(err, data){
            res.render(CONTROLLER_NAME + '/eventProfile', {event: data});
        });
    },
    joinEvent: function (req, res, next) {
        console.log('no time ;(');
    },
    getPastEvents: function (req, res, next) {

        events.getPast(new Date(), req.query.page - 1, function(err, data) {
            res.render(CONTROLLER_NAME + '/events', {events: data});
        });
    },
    getCreateEventForm: function (req, res, next) {
        res.render(CONTROLLER_NAME + '/create');
    },
    createEvent: function (req, res, next) {
        console.log(req.body);
        events.create(req.body);
        res.redirect('/');
    }
}