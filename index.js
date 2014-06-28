require( 'dotenv' ).load( );

var // setting up hapi 
Hapi = require( 'hapi' ),
port = process.env.NODE_PORT || 3030,
hostname = process.env.NODE_HOSTNAME || 'localhost',
options = process.env,
pack = new Hapi.Pack();

pack.server( port, {
    labels: [ 'web' ]
} );

// static file serving
pack.register( {
    plugin: require( './src/static' ), 
    options: {
        dir: __dirname + '/app/'
    } 
}, function ( err ) { 
    if ( err ) {
        console.log( err.message );
    }
} );

// the api
pack.register( {
    plugin: require( './api/' ), 
    options: options 
}, function ( err ) { 
    if ( err ) {
        console.log( err.message );
    }
} );


pack.start( function ( ) {
    console.log( 'Server started @ %s:%s', hostname, port );
} );