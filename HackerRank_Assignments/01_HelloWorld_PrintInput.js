//#1 Print "Hello World!" to the console
console.log("Hello World!");
console.log("Hello "+"World!");
console.log("Hello","World!");

//#2 Print the input to the console
function processData(input) {
    //Enter your code here
    console.log(input);
} 
//predefined code
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
