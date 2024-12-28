/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr: number[]): number {
    // Write your code here
    arr.sort((a,b) => a - b); // This shit made me fail the first time, sort without argument sorts by ASCII.
    return arr[Math.floor(arr.length / 2)];
}