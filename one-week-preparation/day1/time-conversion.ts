/* https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem */
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Write your code here
    const split = s.split(":");
    const modifier = s.endsWith("PM") ? 12 : 0;
    const ending = split[2].replace(RegExp("AM|PM"), "");
    let start: number | string = +split[0];
    if(split[0] == "12") {
        start = (start - 12 + modifier)
    } else {
        start = (start + modifier)
    }
    if(start < 11) {
        start = "0" + start; //padding.
    }

    return `${start}:${split[1]}:${ending}`
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
