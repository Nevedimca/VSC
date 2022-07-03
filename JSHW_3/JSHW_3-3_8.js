
// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

//   8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
  
//   Пример:
//   deleteDepartment(3)

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



console.log ('\n----- Задача JSHW_3-3_8 -----\n')

const deleteDepartment = function(val){
  enterprises.forEach(e => {
    let index = e.departments.findIndex(d => d.id === val && d.employees_count === 0)
    if (index !== - 1) {
      e.departments.splice(index,1)
    }
  })
}
deleteDepartment(10)
console.log(enterprises[2])



