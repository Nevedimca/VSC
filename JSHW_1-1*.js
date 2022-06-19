
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
// 60 - Technical work

let age_02 = 18
let age_03 = 60
const checkAge = function(age_01) {
    console.log(age_01)
if (age_01 < age_02){
    console.log("1*. You don’t have access cause your age is " + age_01 + " It’s less then " +age_02)
} else if (age_01 >= age_02 && age_01 < age_03) {
    console.log("1*. Welcome  !")
} else if (age_01 > age_03) {
    console.log("1*. Keep calm and look Culture channel")
} else {
    console.log ("1*. Technical work")
}
}


checkAge (-10)
checkAge (17)
checkAge (18)
checkAge (21)
checkAge (60)
checkAge (61)
checkAge (70)