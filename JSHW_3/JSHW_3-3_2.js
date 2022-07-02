
// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

//   2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
  
//   Пример:
//   getEnterpriseName(4) // Предприятие 1
//   getEnterpriseName("Отдел маркетинга") // Предприятие 2


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
  

  
console.log ('----- Задача JSHW_3-3_2 -----')


const getEnterpriseByDepartment = function(val){
  let enterprisesWork
  enterprises.forEach(ent => {
    let departmentsWork
    if (ent.departments){
      departmentsWork = ent.departments.find(dept => {return dept.id === val || dept.name === val})
    }
    if (departmentsWork) enterprisesWork = ent
  })
  return  enterprisesWork ? enterprisesWork : `Нет организации с id (именем): ${val-1} `//<= обект, а так enterprisesWork ? enterprisesWork.name - имя
}

console.log(getEnterpriseByDepartment(1))
console.log(getEnterpriseByDepartment(6))


// console.log ('----- Задача JSHW_3-3_2v2 !СХЕМА! -----')
// const getEnterpriseName = function(searchId) {
//   let counter = 0
//   enterprises.forEach((item) => {
//     if (item.departments) {
//       item.departments.forEach((dep) => {
//           if (dep.id == searchId || dep.name == searchId) {
//             console.log(item.name) 
//             counter++
//           } 
//       })
//     }
//   }  )
//   counter == 0 ? console.log('No such enterprise') : false
// }  
// console.log(getEnterpriseName(5))