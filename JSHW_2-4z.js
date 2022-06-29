// 2я домашка по JS со звездочками:

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

console.log ('----- Задача JSHW_2-4z -----')

const isPalindrom = (word) => {
    let reversString = word.split('').reverse().join('') //split() разбивает объект String на массив строк, reverse() на месте обращает порядок следования элементов массива, join() объединяет все элементы массива
    if (reversString.toLowerCase() == word.toLowerCase()) {
        return (true, `${word} - is polindrom!`)
    } else return (false, `${word} - isn't polindrom!`)
}

console.log(isPalindrom('qwerty'))
console.log(isPalindrom('abba'))
console.log(isPalindrom('Abba'))

console.log ('----- Другие примеры решения JSHW_2-4z -----')

function isPalindrom2(word2){
    word2 = word2.toLowerCase ()
    for(let i=0, j=word2.length-1; i<word2.length, j>=0; i++,j--){
        if (word2[i] !== word2[j]){
            return false
        }
    }
    return true
}
console.log(isPalindrom2('abba'))

console.log ('----- Другие примеры решения JSHW_2-4_2z -----')

function isPalindrom3(word3){
    return word3.toLowerCase () === word3.split('').reverse().join('')
}
console.log(isPalindrom3('abba'))

console.log ('----- Другие примеры решения JSHW_2-4_3z -----')

function isPalindrom4(word4){
    word4 = word4.toLowerCase ()
    for(let i = 0; i<=word4.length/2; i++) {
        if (word4[i] !== word4[word4.length-1-i])
        return false
    }
    return true
}
console.log(isPalindrom4('abba'))
