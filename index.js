const assert = require('assert');
const addon = require('./build/Release/addon');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

try {
    const int1 = getRandomInt(1, 100);
    const int2 = getRandomInt(1, 100);
    console.log(`\nTest addition of int numbers: ${int1}, ${int2}`);
    let intSum = addon.add(int1, int2);
    assert.strictEqual(intSum, int1 + int2, `${int1} + ${int2} should equal ${int1 + int2}`);
    console.log(`+ Result ${intSum} - Passed.\n`);

    const num1 = getRandomFloat(1, 100);
    const num2 = getRandomFloat(1, 100);
    console.log(`Test addition of float numbers: ${num1}, ${num2}`);
    let floatSum = addon.add(num1, num2);
    assert.strictEqual(floatSum, num1 + num2, `${num1} + ${num2} should equal ${num1 + num2}`);
    console.log(`+ Result ${floatSum} - Passed.\n`);

    const str1 = getRandomString(5);
    const str2 = getRandomString(5);
    console.log(`Test concatenation of strings: "${str1}", "${str2}"`);
    let concatenatedString = addon.add(str1, str2);
    assert.strictEqual(concatenatedString, str1 + str2, `"${str1}" + "${str2}" should equal "${str1 + str2}"`);
    console.log(`+ Result ${concatenatedString} - Passed.\n`);

    console.log(`Test concatenation of string and number: "${str1}", "${int1}"`);
    concatenatedString = addon.add(str1, int1);
    assert.strictEqual(concatenatedString, str1 + int1, `"${str1}" + "${int1}" should equal "${str1 + int1}"`);
    console.log(`+ Result ${concatenatedString} - Passed.\n`);

} catch (error) {
    console.error('- Test failed:', error.message);
}