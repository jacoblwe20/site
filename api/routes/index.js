var 
fs = require( 'fs' ),
base = __dirname + '/',
files = fs.readdirSync( base );

function goodRoutes ( file ) {
    return /\.js$/.test( file ) && /^(?!index).*$/.test( file );
}

function noValue ( n ) {
    return n;
}

function requireFiles ( file ) {
    var obj;
    try {
        obj = require( base + file );
    } catch ( e ) {
        // instead of null to avoid typeof issues
        obj = undefined;
    }
    if ( obj && typeof obj === 'object' ) {
        return obj;
    }
    return null;    
}

if ( !files ) {
    files =  [];
}
else {
    files = files.filter( goodRoutes );
}

module.exports = files.map( requireFiles ).filter( noValue );