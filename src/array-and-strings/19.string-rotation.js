/**
 * String Rotation:
 * Assumeyou have a method isSubstringwhich checks if one word is a substring
 * of another. Given two strings, sl and s2, write code to check if s2 is a
 * rotation of sl using only one call to isSubstring.
 * (e.g., "waterbottle" is a rotation of"erbottlewat").
 */

// compare s2 with s1 to find where the rotation begins
// 'erb' starts at index 3 of s1.
// split s1 and compare the first half with the end of s2


const word1 = 'waterbottle';
const word2 = 'erbottlewat';

const isSubstring = (s1, s2) => {
    const chunk = s2.slice(0, 3); // erb
    const indexOf = s1.indexOf(chunk); // 3
    const comp = s2.slice(-indexOf); // wat
    return comp === s1.slice(0, indexOf); // wat === wat
};

console.log(isSubstring(word1, word2));