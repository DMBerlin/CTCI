/**
 * Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
 * "compressed" string would not become smaller than the original string, your method should return
 * the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 */

const compress = (word) => {
    let counter = 1;
    let hash_index = 0;
    let hash = [word[0], counter];

    for (let n = 1; n < word.length; n++){
        if (hash[hash_index] === word[n]) {
            counter++;
            hash[hash_index + 1] = counter;
        } else {
            counter = 1;
            hash_index += 2;
            hash[hash_index] = word[n];
            hash[hash_index + 1] = counter;
        }
    }

    const finalHash = hash.join('');
    return finalHash.length < word.length ? finalHash : word;
};

console.log(compress('aabcccccaaappacddddd'));

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */