var Event = require('mongoose').model('Event'),
    PAGE_SIZE = 10;

module.exports = {
    create: function(callback) {
        Event.create(callback);
    },
    getActive: function(date, page, callback) {
        Event.where('date').gte(date).sort('date').skip(PAGE_SIZE * page).limit(PAGE_SIZE).exec(callback);
    },
    joinEvent: function(eventId) {
      Event.update({_id: eventId}); // No time ;(
    },
    getEventById: function (id, callback) {
        Event.findOne({_id: id}, callback);
    },
    getPast: function(date, page, callback) {
        Event.where('date').lt(date).sort('date').skip(PAGE_SIZE * page).limit(PAGE_SIZE).exec(callback);
    }
};