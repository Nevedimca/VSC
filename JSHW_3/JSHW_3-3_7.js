
// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

//   7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  
//   Пример:
//   deleteEnterprise(1)

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
  


  

console.log ('\n----- Задача JSHW_3-3_7 -----\n')

const deleteEnterprises = function (val) {
  const index = enterprises.findIndex(el => el.id ===val)
  enterprises.splice(index,1) //index,1 - сколько после индекса удалять 
}
deleteEnterprises(5)
console.log(enterprises)
