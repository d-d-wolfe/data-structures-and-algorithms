# Challenge Summary
Multi Bracket Validation

## Challenge Description
 Create a function called `multiBracketValidation(input)`. Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {}

## Approach & Efficiency
I decided to use a map of key value pairs that would return false if they don't match. The for loop iterates over the array if at the end, the array is empty, it returns true. If there's anything left in the array, it returns false.

## Solution
[Whiteboard](multi-bracket.jpg)
