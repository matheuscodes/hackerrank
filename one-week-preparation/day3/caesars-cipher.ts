/* https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1/problem */

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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s: string, k: number): string {
    // Write your code here
    const map: Map<string, string> = new Map();
    for(let i = 0; i < 26; i += 1) {
        map.set(String.fromCharCode("A".charCodeAt(0) + i), String.fromCharCode(("A".charCodeAt(0) + (i + k) % 26)))
    }
    for(let i = 0; i < 26; i += 1) {
        map.set(String.fromCharCode("a".charCodeAt(0) + i), String.fromCharCode(("a".charCodeAt(0) + (i + k) % 26)))
    }
    let encrypted: string = "";
    for(let char = 0; char < s.length; char += 1) {
        console.log(s[char], map.get(s[char]), s[char].charCodeAt(0))
        if(map.has(s[char])) {
            encrypted += map.get(s[char]);
        } else {
            encrypted += s[char];
        }
    }
    return encrypted;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const s: string = readLine();

    const k: number = parseInt(readLine().trim(), 10);

    const result: string = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}