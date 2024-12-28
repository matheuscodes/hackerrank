/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */
function flippingMatrix(matrix: number[][]): number {
    // Write your code here
    let n = matrix[0].length/2;
    let result = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++){
            result += Math.max(matrix[i][j], Math.max(matrix[2*n-1-i][j],
            Math.max(matrix[2*n-1-i][2*n-1-j], matrix[i][2*n-1-j])));
        }
    }
    return result;
}
