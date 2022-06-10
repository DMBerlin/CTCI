/**
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards. A permutation
 * is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 */

 const isPlaimPerm = (word) => {
   const hash = {};

   for (let c = 0; c < word.length; c++) {
      if (hash[word[c]]) {
         delete hash[word[c]];
      } else {
         hash[word[c]] = true;
      }
   }

   console.dir(hash);

   return Object.values(hash).length <= 1;

 }

 console.log(isPlaimPerm('carerac'));

 /**
  * Time complexity: O(n)
  * Space complexity: O(1)
  */