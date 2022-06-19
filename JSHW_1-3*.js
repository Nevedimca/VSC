// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
// 60 - Technical work


let age_02 = 18
let age_03 = 60
const checkAge = function(age_01) {
    age_01 = Number (age_01)
    console.log(age_01)
if (age_01) {
    if (age_01 < age_02){
        console.log("2*. You don’t have access cause your age is " + age_01 + " It’s less then " +age_02)
    } else if (age_01 >= age_02 && age_01 < age_03) {
        console.log("2*. Welcome  !")
    } else if (age_01 > age_03) {
        console.log("2*. Keep calm and look Culture channel")
    } else {
        console.log ("2*. Technical work")
    }
    }else{
        console.log ("2*. error number")
    }
}


checkAge (-10)
checkAge (17)
checkAge (18)
checkAge (21)
checkAge (60)
checkAge (61)
checkAge (70)
checkAge ("dssd")
checkAge ("22")
checkAge ("0")

