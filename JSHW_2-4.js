// 2я домашка по JS со звездочками:

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

const isPalindrom = (word) => {
    let reversString = word.split('').reverse().join('')
    if (reversString.toLowerCase() == word.toLowerCase()) {
        return (true, `${word} - is polindrom!`)
    } else return (false, `${word} - isn't polindrom!`)
}

console.log(isPalindrom('qwerty'))
console.log(isPalindrom('abba'))
console.log(isPalindrom('Abba'))
