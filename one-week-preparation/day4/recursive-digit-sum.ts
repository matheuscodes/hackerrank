/* https://www.hackerrank.com/challenges/one-week-preparation-kit-recursive-digit-sum/problem */
'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n: string, k: number): number {
    // Write your code here
    return calculateSuperDigit((calculateSuperDigit(n) * k).toString());
}

function calculateSuperDigit(n: string): number {
    if(n.length == 1) {
        return parseInt(n);
    }
    let sum = 0;
    for(let digit of n.split('')) {
        sum += parseInt(digit);
    }
    const newSuperDigit = calculateSuperDigit(sum.toString());
    return newSuperDigit;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const n: string = firstMultipleInput[0];

    const k: number = parseInt(firstMultipleInput[1], 10);

    const result: number = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
