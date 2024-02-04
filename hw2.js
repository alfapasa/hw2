//part1
// let firstPart = prompt("Write first line");
// let secondPart = prompt("Write second line");
// let thirdPart = prompt("Write third line");
// alert(firstPart + " " + secondPart + " " + thirdPart);

//part2
let fiveDigitsNumber = prompt('Write 5-digits number');
let digit5 = parseInt(fiveDigitsNumber % 10);
let digit4 = parseInt((fiveDigitsNumber % 100) / 10);
let digit3 = parseInt((fiveDigitsNumber % 1000) / 100);
let digit2 = parseInt((fiveDigitsNumber % 10000) / 1000);
let digit1 = parseInt((fiveDigitsNumber % 100000) / 10000);

alert(digit1 + " " + digit2 + " " + digit3 + " " + digit4 + " " + digit5);