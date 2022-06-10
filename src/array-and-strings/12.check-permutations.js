/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
 * word {string} = 'abd'
 * word2 {string} = 'cba'
 */

const word = process.argv[2];
const word2 = process.argv[3];

let permute = (str, result) => {
    if (str.length === 0) {
      return result === word2 ? console.log(word2, true) : console.log(result);
    }
  
    for (let i = 0; i < str.length; i++) {
      const rest = str.substring(0, i) + str.substring(i + 1);
      permute(rest, result + str[i]);
    }
    
  }

permute(word, '');

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */