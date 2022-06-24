// 2я домашка по JS со звездочками:

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'



// 6 гласные  «A», «E», «I», «O», «U», «Y»; = aeiouy
// 21 согласные : «B», «C», «D», «F», «G», «H», «J», «K», «L», «M», «N», «P», «Q», «R», «S», «T», «V», «W», «X», «Y», «Z»



const getWordStructure = (word) => {
    let vowels = 0 //гласных
    for (let i = 0; i < word.toLowerCase().length; i++) { //toLowerCase() возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр, length
        'aeiouy'.includes(word.toLowerCase()[i]) ? vowels += 1 : vowels  //includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false
    }
    let notVowels = word.replace(/[^a-z]/gi, '').length - vowels //согласные
    console.log('Слово ' + "(" + word + ")" + ' состоит из ' + vowels + ' гласных и ' + notVowels + ' согласных букв')
}
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')
getWordStructure('aeyae')