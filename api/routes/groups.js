module.exports = {
    method: 'GET',
    path: '/api/1.0/groups.json',
    handler: function ( response, reply ) {
        reply([
            {
                name : "Riverside.io",
                link : "http://riverside.io",
                icon : "icon-suitcase",
                desc : {
                    p : 'This is a co-working spot in downtown Riverside, I am one of the founding memebers and am very active with Riverside.io\'s OSS.'
                }
            },
            {
                name : "riverside.js",
                link : "http://riversidejs.org",
                icon : "icon-code",
                desc : {
                    p : 'Meetup with local Javascript Developers in the Inland Empire. We are a group of Riverside tech enthusiast, and the group is growing larger everyday. Come join us and together lets learn to build and hack javascript.'
                }
            }
        ]);
    }
}