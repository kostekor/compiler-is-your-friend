/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string. 

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
2) What did you learn from this exercise?
*/

const nType = 1;
const strType = 'sscscrscriscript';

function scriptAt(str: string) {
    return str.search('Script');
}

console.log('the answer: ', scriptAt(strType));

/** error this line */
console.log('the answer: ', scriptAt(input1));

/**
 * Answer
 * 1. ensure because parameter is assigned type with string
 * 2. type force us to assign a function input correctly. We can ensure that function get input correctly.
 */