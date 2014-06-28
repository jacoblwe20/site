var
fs = require( 'fs' ),
base = __dirname + '/';

function reject( message, code, reply ) {
    reply({
            message: message
        })
        .code( code );
}

function handleFileExsist( reply, file, exsist ) {
    if ( !exsist  ) {
        reject( 'cannot GET ' + file, 404, reply );
        return;
    }
    reply.file( base + file );
}

function getFile ( request, reply ) {
    fs.exists( base + request.params.file, 
        handleFileExsist.bind( null, reply, request.params.file ));
}

function handleRoot ( request, reply ) {
    fs.exists( base + 'index.html', 
        handleFileExsist.bind( null, reply, 'index.html' ));
}

exports.register = function( plugin, options, next ) {
    var
    server = plugin.select( 'web' );
    
    server.route({
        method: 'GET',
        path: '/{file*}',
        handler: getFile
    });  

    server.route({
        method: 'GET',
        path: '/',
        handler: handleRoot
    });  

    if ( options.dir ) {
        base = options.dir;
    }

    next( );
};

exports.register.attributes = {
    version : '1.0',
    name: 'static'
};