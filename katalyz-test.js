
const assert = require( "assert" );
const katalyz = require( "./katalyz.js" );

class Orange {
	constructor( ){ }

	static orange( ){
		return "orange";
	}

	getOrange( ){
		return "orange";
	}
}

class Apple {
	constructor( ){ }

	static apple( ){
		return "apple";
	}

	getApple( ){
		return "apple";
	}
}

let residue = katalyz( Orange, Apple );

assert.deepEqual( Object.keys( residue[ Symbol.for( "static" ) ] ),
	[ "orange", "apple" ], "should be deeply equal" );

assert.deepEqual( Object.keys( residue[ Symbol.for( "prototype" ) ] ),
	[ "getOrange", "getApple" ], "should be deeply equal" );

console.log( "ok" );
