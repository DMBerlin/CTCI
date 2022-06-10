/**
 * There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 */

const [ word1, word2 ] = ['pale', 'bake'];

const isOneAway = (word1, word2) => {
    const [ bword, sword ] = word1.length > word2.length ? [ word1, word2 ] : [ word2, word1 ];
    let diffs = 0;

    for (let n = 0; n < sword.length; n++) {
        if (!sword.includes(bword[n])) diffs++;
    }
    return diffs > 1 ? false : true;
}

console.log(isOneAway(word1, word2));

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */