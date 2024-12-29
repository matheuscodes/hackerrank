/* https://www.hackerrank.com/challenges/one-week-preparation-kit-new-year-chaos/problem */
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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q: number[]): void {
    // Write your code here
    let sum = 0;
    const cache: Map<number, number> = new Map();
    try {
        for(let i = 0; i < q.length; i += 1) {
            const larger = howManyLarger(q, i);
            sum += larger;
        }
        console.log(sum);
    } catch(e) {
        console.log(e.message);
    }
}

function howManyLarger(q: number[], from: number): number {
    let sum = 0;
    let lastFound = from;
    const maxPossibleSkip = Math.max(0, q[from] - 3);
    for(let i = from; i >= maxPossibleSkip; i -= 1) {
        if(q[i] > q[from]) {
            if((lastFound - i) > 2) {
                throw new Error("Too chaotic");
            }
            lastFound = i;
            sum += 1;
        }
    }
    return sum;
}


function main() {
    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const n: number = parseInt(readLine().trim(), 10);

        const q: number[] = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
