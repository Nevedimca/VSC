// 2я домашка по JS со звездочками:

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'



// 6 гласные  «A», «E», «I», «O», «U», «Y»; = aeiouy
// 21 согласные : «B», «C», «D», «F», «G», «H», «J», «K», «L», «M», «N», «P», «Q», «R», «S», «T», «V», «W», «X», «Y», «Z»

console.log ('----- Задача JSHW_2-3z -----')

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

console.log ('----- Другие примеры решения JSHW_2-3z -----')

function getWordStructure5 (word2) {
    const vowels = 'aeiouy'.split('') //split() разбивает объект String на массив строк путём разделения строки указанной подстрокой
    const conconants = 'bcdfghjklmnpqrstvwxz'.split('')
    // console.log (vowels2, conconants)
    let vowelsCount = 0
    let conconantsCount = 0
    for (const char of word2.toLowerCase()) { //for...of выполняет цикл обхода итерируемых объектов
        // console.log (char)
        if (vowels.includes(char)) vowelsCount++
        else if (conconants.includes(char)) conconantsCount++
    }
    console.log(`В слове ${word2} : ${vowelsCount} гласных и ${conconantsCount} согласных букв`)
}
getWordStructure5 ('Check-List')

console.log ('----- Другие примеры решения JSHW_2-3_2z -----')

function getWordStructure3 (word3) {
    const vowels = 'aeiouy'.split('')
    const conconants = 'bcdfghjklmnpqrstvwxz'.split('')
    let vowelsCount = 0
    let conconantsCount = 0
    for (const char of word3.toLowerCase()) { 
        if (vowels.indexOf(char) !== -1) vowelsCount++ //indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет
        else if (conconants.indexOf(char) !== -1) conconantsCount++
    }
    console.log(`В слове ${word3} содержиться: ${vowelsCount} гласных и ${conconantsCount} согласных букв`)
}
getWordStructure3 ('Check-List')

console.log ('----- Другие примеры решения JSHW_2-3_3z -----')

function getWordStructure4 (word4) {
    console.log (`В слове ${word4} содержиться: 
    ${(word4.match(/[aeiouy]/gi)) ? (word4.match(/[aeiouy]/gi)).length :0} гласных и 
    ${(word4.match(/[bcdfghjklmnpqrstvwxz]/gi)) ? (word4.match(/[bcdfghjklmnpqrstvwxz]/gi)).length :0} согласных букв`)
}
getWordStructure4 ('Check-List')

console.log ('----- Другие примеры решения JSHW_2-3_4z !СХЕМА! -----')
function getWordStructure2(word) {
    const vowels = 'aeiouy'.split('')
    const consontants = 'bcdfghjklmnpqrstvwxz'.split('')
    let numberOfVowels = 0
    let numberOfConsontants = 0
    for (char of word.toLowerCase()) {
        if (vowels.includes(char)) numberOfVowels++
        if (consontants.includes(char)) numberOfConsontants++
    }
    console.log(`Слово ${word} состоит из ${numberOfVowels} гласных и ${numberOfConsontants} согласных букв`)
}
getWordStructure2 ('Check-List')