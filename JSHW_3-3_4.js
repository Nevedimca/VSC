
// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

//   4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
  
//   Пример:
//   addDepartment(1, "Название нового отдела")

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
  

  

console.log ('----- Задача JSHW_3-3_4 -----')

const getEnterprise = function (val) { // поиск организации
  let enterprisesWork = enterprises.find (el => el.id === val || el.name === val)
  return enterprisesWork ? enterprisesWork : false
}
// console.log(getEnterprise(5))
// console.log(getEnterprise("Предприятие 2"))

const addDepartment = function (entId, name, count = 0) {

}