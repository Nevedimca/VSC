
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
  

  

  // console.log ('----- Задача JSHW_3-3_3  -----')

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
  // console.log(enterprises)

console.log ('\n----- Задача JSHW_3-3_4 -----\n')

const getEnterprises = function (val) { // поиск организации
  let enterprisesWork = enterprises.find (el => el.id === val || el.name === val)
  return enterprisesWork ? enterprisesWork : false
}
// console.log(getEnterprises(5))
// console.log(getEnterprises("Предприятие 2"))

const addDepartment = function (entId, name, count = 0) {
  const enterprisesWork = getEnterprises (entId)
  if (enterprisesWork) enterprisesWork.departments.push({
    id: getNewId(enterprises),
    name: name,
    employees_count: count
  })
}
addDepartment(11, 'qa', 20)
console.log(enterprises[3])