
// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

//   9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
  
//   Пример:
//   moveEmployees(2, 3)

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

  // console.log ('\n----- Задача JSHW_3-3_2 -----\n')

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

  // console.log ('\n----- Задача JSHW_3-3_6 -----\n')

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

console.log ('\n----- Задача JSHW_3-3_9 -----\n')
// console.log(enterprises[0])
const moveEmployees = function(currenID, newId){
  const curren = getDeptartments(currenID)
  const newDept = getDeptartments(newId)
  if(curren && newDept && getEnterpriseByDepartment(currenID) === getEnterpriseByDepartment(newId)){
    newDept.employees_count += curren.employees_count
    curren.employees_count = 0
  } else throw new Error('No work')
}
moveEmployees(2,3)
console.log(enterprises[0])



