/**
 * Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
 * bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 */

/**
 * MATRIX (3x3)
 * [
 *  [1,2,3]
 *  [4,5,6]
 *  [7,8,9]
 * ] 
 */

/**
 * Rotate 90o degrees
 * [
 *  [7,4,1]
 *  [8,5,2]
 *  [9,6,3]
 * ] 
 */

const data = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const rotateMatrix = (matrix) => {
    // Swap elements    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j > i) {
                const temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
    // Swap colums
    for (let i = 0; i < matrix.length; i++) {
        const arr = matrix[i];
        matrix[i] = arr.reverse();
    }

    console.log(matrix);
}

rotateMatrix(data);