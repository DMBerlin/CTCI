/**
 * Question: Implement an algorithm to determine if a string has all unique characters.
 * <b>What if you cannot use additional data structures?</b>
 */

const arg = process.argv[2];
console.log('Word: ', arg);
if (!arg) return console.log('Need a word.');

const isUnique = function (...args) {
    const word = args[0];
    // Sort characters alphabectly
    const reorderedWordArray = word.split('').sort();
    for (let cha = 1; cha < reorderedWordArray.length; cha++) {
        if (reorderedWordArray[cha] === reorderedWordArray[cha -1]) {;
            return false;
        }
    }

    return true;
};

const res = isUnique(arg);
console.log('Check: ', res);

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */