
module( 'pad' );

test( "test pad with arbitrary character", function() {

	equal( StringFormat.pad( 0.1, 4, '_' ), "_0.1" );

});

test( "test pad with arbitrary character, to 10 digits", function() {

	equal( StringFormat.pad( 1, 10, 'x' ), "xxxxxxxxx1" );

});

module( 'toFixed' );

test( "test with long floating point number, to 2 decimal digits", function() {

	equal( StringFormat.toFixed( 0.3294872340192823801923, 2 ), 0.33 );

});

test( "test with 5 digit floating point number, to 3 decimal digits", function() {

	equal( StringFormat.toFixed( 0.51234, 3 ), 0.512 );

});


module( 'secondsToHHMMSS' );

test( "test 30 seconds", function() {

	equal( StringFormat.secondsToHHMMSS( 30 ), "00:00:30" );

});

test( "test 60 seconds", function() {

	equal( StringFormat.secondsToHHMMSS( 60 ), "00:01:00" );

});

test( "test 90 seconds", function() {

	equal( StringFormat.secondsToHHMMSS( 90 ), "00:01:30" );

});

test( "test 120 seconds", function() {

	equal( StringFormat.secondsToHHMMSS( 120 ), "00:02:00" );

});

test( "test 3600 seconds", function() {

	equal( StringFormat.secondsToHHMMSS( 3600 ), "01:00:00" );

});

