
# Emoji Code Converter

My aim was to create a very simple JavaScript function that takes a word as an input and returns the corresponding emojis, as I feel like I need to see some colour at the moment 🌈

I took some guidance from one of the previous workshops earlier in the week. 

# Plan
To create a function called emojiCode that takes a word as an input and converts it into emojis. 

The initial plan was to implement a list of letters to emojis in a separate data.js file which would be imported, however this was my biggest hurdle in my initial stages of testing as for some reason when creating and importing the separate data file I couldn't get any testing to work, so I ultimately pulled the list into the main.js file and used the import method from there instead. Here's an example of my emojiMap.

    'A': '🎬', 'B': '🎈', 'C': '🎨', 'D': '🍩', 'E': '🌟',
    'F': '🐟', 'G': '🎸', 'H': '🚁', 'I': '🌈', 'J': '🕹️',
    'K': '🔑', 'L': '🔥', 'M': '🌙', 'N': '👃', 'O': '🍊',
    'P': '🍕', 'Q': '👑', 'R': '🌹', 'S': '🌞', 'T': '🍵',
    'U': '🦄', 'V': '🌋', 'W': '🌊', 'X': '❌', 'Y': '🧲',
    'Z': '💯'

# Testing
In the main.test.js file I used the 3 A's method to plan out my test and imported the function to be tested from the main.js file.
    
    import { expect, test } from 'vitest' // importing vitest for testing

    import { emojiCode } from './main'; // importing the function to be tested from main.js

// ARRANGE

    test('transform any word into a bunch of emojis', () => {    
    const emojis = "🚁🌈"; // expected emoji pattern
    const word = "HI"; // input word

// ACT
    
    const actual = emojiCode(word); // call the function with the input word


// ASSERT

    expect(actual).toBe(emojis); // compare word input with expected emojis output

# Final Result
After testing (which passed the expected output but not the input due to no function being created like so) –

    FAIL  main.test.js > transform any word into a bunch of emojis
    AssertionError: expected undefined to be '🚁🌈' // Object.is equality

    - Expected: 
    "🚁🌈"

    + Received: 
    undefined

– I was able to find a couple of different ways to create a JavaScript function to convert words into emojis using the split, map and join methods. The function could also be completed as a for loop. 

# THANK YOU AND 🚁🌈🔥🍕🌟  🌊🍊🕹️🔑🌹👃🔥🌟💯