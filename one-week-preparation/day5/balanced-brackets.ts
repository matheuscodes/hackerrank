/* https://www.hackerrank.com/challenges/one-week-preparation-kit-balanced-brackets/problem */
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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s: string): string {
    // Write your code here
    const queue = [];
    const brackets = s.split("");
    for(let bracket of brackets) {
        switch(bracket) {
            case "{":
                queue.push("}");
                break;
            case "(":
                queue.push(")");
                break;
            case "[":
                queue.push("]");
                break;
            case "}":
            case "]":
            case ")":
                const top = queue.pop();
                if(top != bracket) {
                    return "NO";
                }
                break;
            default:
                throw new Error("Bad input");
        }
    }
    return queue.length == 0 ? "YES" : "NO";
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const s: string = readLine();

        const result: string = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}
