
// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

//   5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
  
//   Пример:
//   editEnterprise(1, "Новое название предприятия")

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
  

  

  // console.log ('----- Задача JSHW_3-3_4 -----')

  const getEnterprises = function (val) { // поиск предприятия (организации)
    let enterprisesWork = enterprises.find (el => el.id === val || el.name === val)
    return enterprisesWork ? enterprisesWork : false
  }
  // console.log(getEnterprises(5))
  // console.log(getEnterprises("Предприятие 2"))

console.log ('----- Задача JSHW_3-3_5 -----')

const editEnterprise = function (val, name) {
  const enterprisesWork = getEnterprises (val)
  if (enterprisesWork) enterprisesWork.name = name
  else throw new Error ('Нету такого предпрития')
}
console.log(enterprises,editEnterprise(1,'Test'))
console.log ('\n------------------\n')
console.log(enterprises,editEnterprise('Предприятие 3','Test2'))
