// 2я домашка по JS со звездочками:

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1


let p = 2
const exponent = (exp) =>{
    console.log ("Возведения", p, "в степень", exp)
for (let i = 1; i <= exp; i++){
    console.log (`${i} - ${p ** i}`)
}
}

exponent(10)
exponent(-2)
exponent(0)
exponent(4)


