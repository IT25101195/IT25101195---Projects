console.log("Hello World!")
var number = 5; // in-line comment (It can change string to a int)
let ourName = "freeCodeCamp"
const pi = 3.14

/*
This 
is 
Multi 
Line 
Comment
*/

/* Data Types */
var a;
var b = 2;

a = 7;
b = a;
console.log(a)

/* js is case sensitive */

var myStr = "I am "

/* *****
Code Output
\'      Single Quote
\"      Double Quote
\\      BackSlash
\n      New Line
\r      Carrier Return
\t      Tab
\b      BackSpace
\f      Form Feed
***** */

/* Concatinate Strings 
var ourStr = "This is the start"+ "I come first"*/

var NameIs = "Thanuja";
console.log(NameIs.length)

var FName = "Thanuja";
var LName = "Perera";
console.log(LName[LName.length-1])

/* Madlib Game */
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The "+myAdjective+" "+myNoun+" "+myVerb+" to the store "+myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

var ourArray = [50,60,70];/* Array value can be changed! */
var Data1 = ourArray[0];
ourArray.push(80)
console.log(Data1)
console.log(ourArray)



