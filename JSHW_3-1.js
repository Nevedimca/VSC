// Task 1.

// Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021). Массив в task1.txt



const searchUsers = (people) => {
    people.findIndex(user => {
        if (user.registrationDate === '09.10.2021' || user.registrationDate === '10.10.2021') {
            console.log(user)
        }
    })
}


