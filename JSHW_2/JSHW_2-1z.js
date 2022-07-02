// 2я домашка по JS со звездочками:

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

console.log ('----- Задача JSHW_2-1z -----')
let voz = 2
const exponent = (exp) =>{
    if (exp <1) {
        console.log ("Степень", exp, "вводить нельзя!")
    }else {
    console.log ("Возведения", voz, "в степень", exp, "=", Math.pow(voz, exp)) // Math.pow(base, exponent) - Возведение в степень, base - Основание степени, exponent - Показатель степени
for (let i = 1; i <= exp; i++){  //for (начало; условие; шаг) {тело цикла}
    console.log (`${i} - ${voz ** i}`) // Возведение в степень **
    }
}
}

exponent(10)
exponent(-2)
exponent(0)
exponent(4)

console.log ('----- Другие примеры решения JSHW_2-1z -----')

const pow = function(counter) {
for (let i=1; i<=counter; i++) {
    console.log (2**i) // (2**i) = Math.pow(2,i)
}
}
pow (10)

console.log ('----- Другие примеры решения JSHW_2-1_2z !СХЕМА! -----')

const power = function(num) {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result = result *2
    }
    return result
}
console.log(power(10))