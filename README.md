StringFormat.js
===============

Simple Javascript library to format strings.

I'm adding methods as I see fit (they're extracted from real working software). If you write a new method that is helpful, please submit a patch (with tests)!

But before you do that, remember that the name of the library is **StringFormat**. Your method has to **format** strings. Don't use this library as a holder for all your string-handling functions because I probably won't be merging those changes in, sorry.

Thanks :-)

# Currently available methods

## pad( number, minimumLength, paddingCharacter )

Pad a number with a character until its total length fits the specified amount.

Default _minimumLength_ = 1; default _paddingCharacter_ = ' ' (an space)

````javascript
StringFormat.pad( 0.1, 4, '_' );    // returns "_0.1"
StringFormat.pad( 1, 10, 'x' );     // returns "xxxxxxxxx1"
````

## toFixed( number, numberDecimals )

Get a fixed representation of a number, restricting the number of decimals to the specified length.

Great for displaying fancy approximations when space is tight (i.e. shiny display panels). You show a human readable value while keeping the internal full value for internal calculations.

Default _numberDecimals_ = 2.

````javascript
StringFormat.toFixed( 0.3294872340192823801923, 2 );    // returns 0.33
StringFormat.toFixed( 0.51234, 3 );                     // returns 0.512
````

## secondsToHHMMSS( seconds )

Convert seconds into a human readable string, _hh:mm:ss_ format.

````javascript
StringFormat.secondsToHHMMSS( 30 );    // returns "00:00:30"
StringFormat.secondsToHHMMSS( 60 );    // returns "00:01:00"
StringFormat.secondsToHHMMSS( 90 );    // returns "00:01:30"
StringFormat.secondsToHHMMSS( 120 );    // returns "00:02:00"
StringFormat.secondsToHHMMSS( 3600 );    // returns "01:00:00"
````
