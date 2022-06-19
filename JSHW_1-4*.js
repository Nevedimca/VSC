// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
// 60 - Technical work

let age_02 = 18
let age_03 = 60
const checkAge = function(age_01) {
    console.log(age_01)
if (age_01 && !isNaN(age_01)) {
    if (age_01 < age_02){
        console.log("4*. You don’t have access cause your age is " + age_01 + " It’s less then " +age_02)
        alert("4*. You don’t have access cause your age is " + age_01 + " It’s less then " +age_02)
    } else if (age_01 >= age_02 && age_01 < age_03) {
        console.log("4*. Welcome  !")
        alert("4*. Welcome  !")
    } else if (age_01 > age_03) {
        console.log("4*. Keep calm and look Culture channel")
        alert("4*. Keep calm and look Culture channel")
    } else {
        console.log ("4*. Technical work")
        alert ("4*. Technical work")
    }
    }else{
        console.log ("4*. error number")
        alert("4*. error number")
    }
}


let a = prompt ('enter your age')

checkAge (a)