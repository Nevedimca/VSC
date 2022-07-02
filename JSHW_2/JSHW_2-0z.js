// 2я домашка по JS со звездочками:

// поменять елемент массива 

console.log ('----- поменять елемент массива -----')

const arr = [
    {name: 'Vadim'},
    {name: 'Viktoriya'},
    {name: 'Anatoliy'}
]
console.log ('Массив =', arr)

console.log ('----- замена елемента массива -----')

let vika = arr.find (el => el.name == 'Viktoriya') // поиск выбраного елемента
console.log ('Елемент =', vika)
vika ['name'] = 'Lena' // заменяем выбраный елемент
console.log ('Массив = ', arr)


console.log ('----- несколько однотипных елементов -----')

const arr2 = [
    {name: 'Vadim'},
    {name: 'Viktoriya'},
    {name: 'Viktoriy'},
    {name: 'Viktoriya2'},
    {name: 'Viktoriya'},
    {name: 'Anatoliy'}
]
console.log ('Массив =', arr2)

let vika2 = arr2.filter (el => el.name == 'Viktoriya') // поиск несколько однотипных елементов
console.log ('Массив Viktoriya =', vika2)

