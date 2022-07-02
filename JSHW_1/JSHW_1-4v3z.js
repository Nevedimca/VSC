// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
// 60 - Technical work

let age_02 = 18
let age_03 = 60
const div = document.getElementById('d')
const checkAge = function(...age_01) {
    console.log(age_01)
    age_01.forEach(el => {
        if (el && !isNaN(el)) {
            if (el < age_02){
                console.log(el+ '\n'+ "4v3*. You don’t have access cause your age is " + el + " It’s less then " +age_02)
                div.innerHTML += el + '<br />'+ "4v3*. You don’t have access cause your age is " + el + " It’s less then " +age_02 +'<br />'
            } else if (el >= age_02 && el < age_03) {
                console.log(el+ '\n'+ "4v3*. Welcome  !")
                div.innerHTML += el + '<br />'+ "4v3*. Welcome  !"+'<br />'
            } else if (el > age_03) {
                console.log(el+ '\n'+ "4v3*. Keep calm and look Culture channel")
                div.innerHTML += el + '<br />'+ "4v3*. Keep calm and look Culture channel"+'<br />'
            } else {
                console.log (el+ '\n'+ "4v3*. Technical work")
                div.innerHTML += el + '<br />'+ "4v3*. Technical work"+'<br />'
            }
            }else{
                console.log (el+ '\n'+ "4v3*. error number")
                div.innerHTML+= el + '<br />'+ "4v3*. error number"+'<br />'
            } 
    });
}
checkAge (-10,17,18,21,60,61,"dssd","22","0","")
