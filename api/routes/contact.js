var
fs = require( 'fs' );

module.exports = {
    method: 'GET',
    path: '/api/1.0/contact.json',
    handler: function ( response, reply ) {
        reply([
            {
                name : "Twitter",
                link : "https://twitter.com/#!/jacob2dot0",
                icon : "icon-twitter"
            },
            {
                name : "Github",
                link : "https://github.com/jacoblwe20",
                icon : "icon-github"
            },
            {
                name : 'Google +',
                link : 'https://plus.google.com/102589001946394459745/',
                icon : 'icon-gplus'
            },
            {
                name : 'Codepen',
                link : 'http://codepen.io/jacoblwe20/',
                icon : 'icon-code'
            },
            {
                name : "ping@jacoblowe.me",
                link : "mailto:ping@jacoblowe.me",
                icon : "icon-mail"
            }
        ]);
    }
}