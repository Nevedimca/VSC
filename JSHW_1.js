// 1. Создать переменную “item_1”
let item_1

//  2. Присвоить переменной item_1 цифру 5.
item_1 = 5

//  3. Вывести в консоль item_1.
console.log ("3. item_1 =", item_1)

//  4. Создать переменную “item_2”
let item_2

//  5. Присвоить переменной item_2 цифру 3.
item_2 = 3

//  6. Вывести в консоль item_2.
console.log ("6. item_2 =", item_2)

//  7. Создать переменную “item_3”
let item_3

//  8. Присвоить переменной item_3 сложение item_1 и item_2.
item_3 = item_1 + item_2 

//  9. Вывести в консоль item_3.
console.log ("9. item_3 =", item_3)

//  10. Создать переменную “item_4”
let item_4

//  11. Присвоить переменной item_4 строку “Yolochka”
item_4 = "Yolochka"

//  12. Вывести в консоль item_4.
console.log ("12. item_4 =", item_4)

//  13. Вывести в консоль сложение item_3 и item_4.
console.log ("13. item_3 + imem_4 =", item_3 + item_4)

//  14. Вывести в консоль умножение item_3 и item_4.
console.log ("14. item_3 * imem_4 =", item_3 * item_4)

//  15. Создать переменную “item_5”
let item_5

//  16. Присвоить переменной item_5 переменную item_3
item_5 = item_3
console.log ("16. item_5 =", item_5)

//  17. Создать переменную item_6.
let item_6

//  18. Создать переменную item_6_type
let item_6_type

//  19. Присвоить переменной item_6 значение 15
item_6 = 15

//  20. Присвоить переменной item_6_type тип переменной item_6
item_6_type = typeof(item_6)

//  21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
console.log ("21. item_6 ==", item_6, "item_6_type ==", item_6_type)

//  22. Создать переменную item_7 и в ней преобразовать item_6 в String.
let item_7 = item_6 + ""
console.log ("22. item_6 =", item_6, ">переменная>",typeof(item_6),"/", "item_7 =", item_7, ">переменная>", typeof(item_7))

//  23. Создать переменную item_7_type
let item_7_type

//  24. Присвоить переменной item_7_type тип переменной item_7
item_7_type = typeof(item_7)

//  25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
console.log ("25. item_7 =", item_7,  ">переменная>",typeof(item_7),"/", "item_7_type =", item_7_type, ">переменная>",typeof(item_7_type),)

//  26. Создать переменную “age_1” и присвоить ей значение 10
let age_1 = 60

//  27. Создать переменную “age_2” и присвоить ей значение 18
let age_2 = 18

//  28. Создать переменную “age_3” и присвоить ей значение 60
let age_3 = 60

//  29. Создать if в котором будите проверять значение переменной age_1
if (age_1){
    console.log("29. age_1 =", age_1)
}
//  30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
if (age_1 < age_2){
    console.log("30. You don’t have access cause your age is " + age_1 + " It’s less then " +age_2)
}

//  31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
if (age_1 >= age_2){
    if (age_1 < age_3){
    console.log("31. Welcome  !")
    }
}

//  32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
if (age_1 > age_3){
    console.log("32. Keep calm and look Culture channel")
}

//  33. Иначе выводите “Technical work”.
if  (age_1 == 0) 
{
console.log("33. Technical work")
} else 
    {
    if (age_1 < age_2)
        {
        console.log("33. You don’t have access cause your age is " + age_1 + " It’s less then "+age_2)
        } else 
            {
            if (age_1 > age_3)
                {
                console.log("33. Keep calm and look Culture channel")
                }else 
                    {
                    if (age_1 >= age_2)
                        {
                        if (age_1 < age_3)
                        {
                        console.log("33. Welcome  !")
                        }else 
                            {
                            console.log("33. Technical work")
                            }
                        }
                    }   
            }
    }    

    //  33v2. Иначе выводите “Technical work”.
    
    if (age_1 == age_3 || age_1 == 0) {
    console.log("33v2. Technical work")
    } else if (age_1 < age_2){
        console.log("33v2. You don’t have access cause your age is " + age_1 + " It’s less then " +age_2)
    } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log("33v2. Welcome  !")
    } else {
        console.log("33v2. Keep calm and look Culture channel")
    }