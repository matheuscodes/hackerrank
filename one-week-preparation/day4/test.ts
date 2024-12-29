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
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */

function truckTour(petrolpumps: number[][]): number {
    for(let i in petrolpumps) {
        if(runTruck(petrolpumps, +i) > 0) {
            return +i
        }
    }
    return -1;
}

function runTruck(petrolpumps: number[][], f: number, fuel: number = 0, track: number[] = []): number {
    // Write your code here
    let from = f;
    let nextFuel = fuel;
    while(track.length < petrolpumps.length) {
        nextFuel = nextFuel + petrolpumps[from][0] - petrolpumps[from][1];
        if(nextFuel < 0) break;
        track.push(from);
        from += 1;
        if(from >= petrolpumps.length) {
            from = from - petrolpumps.length;
        }
    }
    return nextFuel;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    let petrolpumps: number[][] = Array(n);

    for (let i: number = 0; i < n; i++) {
        petrolpumps[i] = readLine().replace(/\s+$/g, '').split(' ').map(petrolpumpsTemp => parseInt(petrolpumpsTemp, 10));
    }

    const result: number = truckTour(petrolpumps);

    ws.write(result + '\n');

    ws.end();
}
