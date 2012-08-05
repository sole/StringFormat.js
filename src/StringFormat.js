var StringFormat = {
	pad: function(number, minimumLength, paddingCharacter) {
		var sign = number >= 0 ? 1 : -1,
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
		return Math.floor(number * 100) / 100;
	}
}
