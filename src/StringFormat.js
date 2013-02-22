// StringFormat.js r3 - http://github.com/sole/StringFormat.js
var StringFormat = {

	pad: function(number, minimumLength, paddingCharacter) {
		
		var sign = number >= 0 ? 1 : -1,
			minimumLength = minimumLength !== undefined ? minimumLength : 1,
			paddingCharacter = paddingCharacter !== undefined ? paddingCharacter : ' ',
			str = Math.abs(number).toString(),
			actualMinimumLength = minimumLength;

		if(sign < 0) {
			actualMinimumLength--;
		}

		while(str.length < actualMinimumLength) {
			str = paddingCharacter + str;
		}

		if(sign < 0) {
			str = '-' + str;
		}

		return str;
	},
	
	toFixed: function(number, numberDecimals) {
		
		var numberDecimals = numberDecimals !== undefined ? numberDecimals : 2,
		multiplier = Math.pow( 10 , numberDecimals );

		return Math.floor( Math.round( number * multiplier ) ) / multiplier;
	},
	
	secondsToHHMMSS: function( _seconds ) {
		var hours, minutes, seconds = _seconds;

		hours = Math.floor( seconds / 3600 );
		seconds -= hours * 3600;

		minutes = Math.floor( seconds / 60 );
		seconds -= minutes * 60;

		seconds = Math.floor( seconds );

		return StringFormat.pad( hours, 2, '0' ) + ':' + StringFormat.pad( minutes, 2, '0' ) + ':' + StringFormat.pad( seconds, 2, '0' );
	}
}

// CommonJS module format etc
try {
	exports.pad = StringFormat.pad;
	exports.toFixed = StringFormat.toFixed;
	exports.secondsToHHMMSS = StringFormat.secondsToHHMMSS;
} catch( e ) {
}
