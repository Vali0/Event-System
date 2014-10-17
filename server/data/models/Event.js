var mongoose = require('mongoose');

module.exports.init = function() {
    var eventSchema = mongoose.Schema({
        title: { type: String, require: true, unique: true },
        description: { type: String, require: true },
        date: { type: Date,  default: new Date(), require: true },
        location: {
            latitude: String,
            longitude: String
        },
        categories: [],
        type: {
            initiatives: [],
            seasons: []
        },
        creatorName:  { type: String, require: true },
        creatorPhone: { type: Number, require: true },
        comments: [{
            by: { type: String, require: true},
            message: { type: String, require: true}
        }],
        googleProfile: String,
        githubProfile: String,
        facebookProfile: String,
        linkedInProfile: String
    });

    var Event = mongoose.model('Event', eventSchema);
        if (err) {
            console.log('Cannot find movies: ' + err);
            return;
        }

         {
            Event.create({
                title: 'Chirpan Tour',
                description: 'Kushtata na P.K. Qvorov, bash chadura i filovata cheshma',
                date: new Date('Jun  23, 2015'),
                location: {
                    latitude: '0.234',
                    longitude: '1.23'
                },
                categories: ['Zabelejitelnosti', 'Prirodni fenomeni :)'],
                type: {
                    initiatives: ['Software Academy'],
                    seasons: ['Season 2013']
                },
                creatorName: 'Pesho Trubata',
                creatorPhone: '01234',
                comments: [
                    {
                        by: 'Kiro Motikata',
                        message: 'Rakieno vreme be!'
                    },
                    {
                        by: 'Zorbas',
                        message: 'vodata ot filovata cheshma e gadna!'
                    }
                ]
            });

            Event.create({
                title: 'Chirpan Tour Again',
                description: 'Home sweet home!',
                date: new Date('Jun  23, 2010'),
                location: {
                    latitude: '0.234',
                    longitude: '1.23'
                },
                categories: ['Nostalgia'],
                type: {
                    initiatives: ['Software Academy'],
                    seasons: ['Season 2013']
                },
                creatorName: 'Kiro Motikata',
                creatorPhone: '543',
                comments: [
                    {
                        by: 'Pesho Trubata',
                        message: 'Drugo si e tuk'
                    }
                ]
            });

            Event.create({
                title: 'Telerik Academy',
                description: 'Telerik Academy enterprise',
                date: new Date('Jun  20, 2015'),
                location: {
                    latitude: '555.234',
                    longitude: '1234.23'
                },
                categories: ['Exam 13/10/2014'],
                type: {
                    initiatives: ['Software Academy'],
                    seasons: ['Season 2013']
                },
                creatorName: 'Zorbas',
                creatorPhone: '494001',
                comments: [
                    {
                        by: 'Pesho Trubata',
                        message: 'Vzemi toq izpit...'
                    }
                ]
            });
             Event.create({
                 title: 'Telerik Academy1',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy2',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy3',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy4',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy5',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy6',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy7',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy8',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy9',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy10',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy11',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy12',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy13',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });
             Event.create({
                 title: 'Telerik Academy14',
                 description: 'Telerik Academy enterprise',
                 date: new Date('Jun  20, 2015'),
                 location: {
                     latitude: '555.234',
                     longitude: '1234.23'
                 },
                 categories: ['Exam 13/10/2014'],
                 type: {
                     initiatives: ['Software Academy'],
                     seasons: ['Season 2013']
                 },
                 creatorName: 'Zorbas',
                 creatorPhone: '494001',
                 comments: [
                     {
                         by: 'Pesho Trubata',
                         message: 'Vzemi toq izpit...'
                     }
                 ]
             });

        }
    });
};
