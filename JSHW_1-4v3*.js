// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
// 60 - Technical work

let age_02 = 18
let age_03 = 60
const checkAge = function(...age_01) {
    console.log(age_01)
    age_01.forEach(el => {
        if (el && !isNaN(el)) {
            if (el < age_02){
                console.log(el,'\n',"4v2*. You don’t have access cause your age is " + el + " It’s less then " +age_02)
                // alert("4*. You don’t have access cause your age is " + age_01 + " It’s less then " +age_02)
            } else if (el >= age_02 && el < age_03) {
                console.log(el,'\n',"4v2*. Welcome  !")
                // alert("4*. Welcome  !")
            } else if (el > age_03) {
                console.log(el,'\n',"4v2*. Keep calm and look Culture channel")
                // alert("4*. Keep calm and look Culture channel")
            } else {
                console.log (el,'\n',"4v2*. Technical work")
                // alert ("4*. Technical work")
            }
            }else{
                console.log (el,'\n',"4v2*. error number")
                // alert("4*. error number")
            } 
    });
}
checkAge (-10,17,18,21,60,61,"dssd","22","0","")
