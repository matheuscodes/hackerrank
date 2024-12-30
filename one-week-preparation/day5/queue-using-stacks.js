/* https://www.hackerrank.com/challenges/one-week-preparation-kit-queue-using-two-stacks/problem */
const queue = [];

function processData(input) {
    //Enter your code here
    const lines = input.split("\n");
    for(let line of lines) {
        const instructions = line.split(" ");
        if(instructions.length > 1) {
            queue.unshift(instructions[1]);
        } else {
            switch(line) {
                case "2":
                    queue.pop();
                    break;
                case "3":
                    console.log(queue[queue.length - 1]);
                    break;
                default:
                    break; //number of queries.
            }
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
