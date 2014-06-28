module.exports = {
    method: 'GET',
    path: '/api/1.0/about.json',
    handler: function ( response, reply ) {
        reply([{
                name : 'Just a snippet',
                desc : {
                  p:'I make things. I am developer based out of the Inland Empire. The web is my passion and I continue to push the bar with web technologies. I am currently the co-organizer of <a href="http://riversidejs.org">riverside.js</a>. Proud to be a linux user!'
                },
                icon : 'icon-user',
                link : '#'
            },
            {
                name : 'I am a',
                desc : {p:'<ul>\
                  <li>Javascript Ninja\
                  <li>CSS Tamer\
                  <li>HTML Carpenter\
                  <li>PHP Parter\
                  <li>Regular Expressions Wrangler\
                </ul>'},
                icon : 'icon-profile',
                link : '#'
            },
            {
                name : 'I currently work @ Hone Inc',
                icon : 'icon-suitcase',
                link : 'http://gohone.com'
            },
            {
                name : 'My Resume',
                icon : 'icon-resume',
                link : '/resume.html'
            }
        ]);
    }
}