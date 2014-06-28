var
request = require( 'request' );

exports.register = function( plugin, options, next ) {
    var
    server = plugin.select( 'web' );
    server.route( require( './routes/') );    
    next( );
};

exports.register.attributes = {
    version : '1.0',
    name: 'api'
};