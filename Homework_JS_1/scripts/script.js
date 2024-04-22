let userNum = prompt("Введите любое число:")
let percentNum = (userNum) * 0.1
console.log("10% от введенного числа - ", percentNum)

let number1 = prompt("введите первое число");
let number2 = prompt("введите второе число");
let minNumber = Math.min(number1, number2);
console.log("наименьшее число", minNumber);

let number = prompt("Введите любое число")
if (number < 100) {
    console.log("Число меньше 100")
} else if (number > 100) {
    console.log("Число больше 100")
}
else {
    console.log("Число равно 100")
}

let Name = prompt("Введите Ваше имя");
let age = Number(prompt("Введите Ваш возраст"));

if (age >= 18) {
    console.log("Hello,", Name);
} else {
    console.log("Hi,", Name);
}
