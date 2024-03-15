
import { expect, test } from 'vitest' // importing vitest for testing
import { emojiCode } from './main' // importing the function to be tested from main.js


// Arrange 
test('transform any word into a bunch of emojis', () => {
const emojis = "🚁🌈"; // expected emoji pattern
const word = "HI"; // input word

// Act 
const actual = emojiCode(word); // call the function with the input word

// Assert
expect(actual).toBe(emojis); // compare word input with expected emojis output
    
});
