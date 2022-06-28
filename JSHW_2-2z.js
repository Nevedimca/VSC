// 2я домашка по JS со звездочками:

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)


console.log ('----- Задача JSHW_2-2z -----')
const smail_stroka = (smail,stroka) => {
    if (stroka <1) console.log ("Количество строк", stroka, "вводить нельзя!")
else{
    for (let i = 0; i <= stroka; i++) {
    console.log(smail.toString().repeat(i)) // smail.toString() - возвращает строку, представляющую объект для "5"
    }
}
}

smail_stroka (":)",5)
smail_stroka (":)",-5)
smail_stroka (5, 5)
smail_stroka ('5', 5)

console.log ('----- другие примеры решения JSHW_2-2z -----')

function smalik (str, nuberofRows){
    for (let i = 1; i<= nuberofRows; i++ ) {
        console.log (str.repeat(i))
    }
}
smalik (':)', 10 )
