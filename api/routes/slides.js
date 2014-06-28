var
fs = require( 'fs' );

module.exports = {
    method: 'GET',
    path: '/api/1.0/slides.json',
    handler: function ( response, reply ) {
        reply( 'Not yet implemented' );
        /*
        fs.readdir( __dirname + "/../public/slides/", function(err, files){
            var html = [];
            for(var i = 0; i < files.length; i += 1){
                if(files[i].split(/\./).pop() === "html"){
                    var split = files[i].split(/\./);
                    html.push({
                        name : split[0].replace(/(\-|\_)/g, " "),
                        link : "/slides/" + files[i],
                        icon : "icon-layout"
                    })
                }
            };
            res.json({
                title : "Slides",
                results : html
            });
        });
        */
    }
}