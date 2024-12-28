/* https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem */
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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    let positives: number = 0, negatives: number = 0, zeros: number = 0;
    for(const i of arr) {
        if(i > 0) positives += 1;
        else if(i < 0) negatives += 1;
        else zeros += 1;
    }
    console.log((positives/arr.length).toFixed(6))
    console.log((negatives/arr.length).toFixed(6))
    console.log((zeros/arr.length).toFixed(6))
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
