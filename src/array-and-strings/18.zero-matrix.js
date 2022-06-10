/**
 * Zero Matrix:
 * Write an algorithm such that if an element in an MxN matrix is 0,
 * its entire row and column are set to 0.
 */

/**
 * Iterate over the row and find a 0 element in it:
 * [
 *  [1, 2, 0]
 *  [4, 5, 6]
 *  [7, 8, 9]
 * ]
 * Zero found on I[2][0]
 */

/**
 * If a 0 element is found, populate the entire row and colum
 * with 0:
 * [
 *  [0, 0, 0]
 *  [4, 5, 0]
 *  [7, 8, 0]
 * ]
 */

// Create a marker collection to identify the null pointers.
// markers = [{ i: 0, j: 2 }]

// Time complexity: O(n)^2

const data = [
    [1, 2, 0],
    [3, 4, 5],
    [7, 8, 9]
]

const markify = (matrix) => {
    const makers = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                makers.push({ i, j });
            }
        }
    }

    if (!makers.length) return;

    makers.forEach(({ i, j }) => {
        matrix[i].forEach((_, id) => {
            matrix[i][id] = 0;
        });
        matrix.map((arr) => {
            arr[j] = 0;
        });        
    });
}

markify(data);