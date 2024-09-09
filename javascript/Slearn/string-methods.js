let example = "Hello JavaScript World";

function toUppercase(str) {
    return str.toUpperCase();
}

// Test 1: Convert to Uppercase
console.log(toUppercase(example));  // "HELLO JAVASCRIPT WORLD"

function toLowercase(str) {
    return str.toLowerCase();
}

console.log(toLowercase(example));


function capitalizeWords(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

console.log(capitalizeWords(example));


function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString(example));


function findLength(str) {
    return str.length;
}

console.log(findLength(example));



function checkSubstring(str, substring) {
    return str.includes(substring);
}

console.log(checkSubstring(example));



function countOccurrences(str, substring) {
    return str.split(substring).length - 1;
}

console.log(countOccurrences(example));




function extractSubstring(str, start, end) {
    return str.slice(start, end);
}

console.log(extractSubstring(example));


function replaceSubstring(str, target, replacement) {
    return str.replace(target, replacement);
}

console.log(replaceSubstring(example));


function startsWith(str, prefix) {
    return str.startsWith(prefix);
}

console.log(startsWith(example));



function endsWith(str, suffix) {
    return str.endsWith(suffix);
}


function splitString(str, delimiter) {
    return str.split(delimiter);
}


function trimString(str) {
    return str.trim();
}


function padStartString(str, targetLength, padString) {
    return str.padStart(targetLength, padString);
}

console.log(padStartString(example));



function padEndString(str, targetLength, padString) {
    return str.padEnd(targetLength, padString);
}

console.log(padEndString(example));


function repeatString(str, times) {
    return str.repeat(times);
}

console.log(repeatString(example));



function stringToCharArray(str) {
    return Array.from(str);
}

console.log(stringToCharArray(example));



function charAtPosition(str, index) {
    return str.charAt(index);
}

function charCodeAtPosition(str, index) {
    return str.charCodeAt(index);
}

function removeCharacter(str, charToRemove) {
    return str.split(charToRemove).join('');
}

console.log(removeCharacter(example));

