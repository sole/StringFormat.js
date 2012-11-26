StringFormat.js
===============

Simple Javascript library to format strings.

I'm adding methods as I see fit (they're extracted from real working software). If you do a new method that is helpful, please submit a patch!

Thanks.

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
