
// Task 2*

// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).

// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

// Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании


console.log ('----- Задача JSHW_3-2v2 -----')
const fs = require('fs')
let user = JSON.parse(fs.readFileSync('task2.json'))
// console.log(user)

let unique = Array.from (new Set(user.map((item)=>JSON.stringify(item)))).map((item) => JSON.parse(item))
console.log(unique.length)



