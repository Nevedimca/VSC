
// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

//   3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
  
//   Пример:
//   addEnterprise("Название нового предприятия")

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
  

  

console.log ('----- Задача JSHW_3-3_3  -----')

const getNewId = function (company) {  //функция на максимальный id+1
  let maxId = 0
  company.forEach(comp => {
    if (maxId < comp.id) maxId = comp.id
    if (comp.departments){
      comp.departments.forEach (dept =>{
        if (maxId < dept.id) maxId = dept.id
      })
    }
  });
  return maxId+1
}
// console.log(getNewId(enterprises))


const addEnterprise = function(name) {
  enterprises.push({
    id: getNewId(enterprises),
    name: name,
    departments:[]
  })
}
addEnterprise ('Test1')
console.log(enterprises)