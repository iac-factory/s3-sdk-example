#!/usr/bin/env node

require = require( "esm" )( module, { mode: "all", await: true } );

module.exports = require( "./main" );
module.exports.default = require( "./main" );