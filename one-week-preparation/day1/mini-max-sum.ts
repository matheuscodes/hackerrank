/* https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem */
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    // Write your code here
    const totalSum = arr.reduce((a, acc) => a + acc, 0);
    let minSum = Number.MAX_VALUE;
    let maxSum = Number.MIN_VALUE;
    for(const value of arr) {
        minSum = Math.min(minSum, totalSum - value);
        maxSum = Math.max(maxSum, totalSum - value);
    }
    console.log(minSum, maxSum);
}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}