
// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

//   6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
  
//   Пример:
//   editDepartment(7, "Новое название отдела")

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
  

  

console.log ('----- Задача JSHW_3-3_6 -----')

const getDeptartments = function (val) { //поиск отделов 
  let departmentsWork
  enterprises.forEach(company =>{
    const dept = company.departments.find((el) =>{
      return el.id == val || el.name == val
    })
    if (dept) departmentsWork = dept
  })
  return departmentsWork ? departmentsWork : false
}

  // console.log(getDeptartments(6))
  // console.log(getDeptartments("Отдел маркетинга"))

  const editDepartment = function(val,name){
    const departmentsWork = getDeptartments (val)
    if (departmentsWork) departmentsWork.name = name
    else throw new Error ('Нету такого отдела')
  }
editDepartment(6,'Test3')
console.log(enterprises[1])