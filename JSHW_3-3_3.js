
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


const getEnterpriseByDepartment = function(val){
  let enterprisesWork
  enterprises.forEach(ent => {
    let departmentsWork
    if (ent.departments){
      departmentsWork = ent.departments.find(dept => {return dept.id === val || dept.name === val})
    }
    if (departmentsWork) enterprisesWork = ent
  })
  return  enterprisesWork ? enterprisesWork : `Нет организации с id == ${val} или именем == ${val}`//<= обект, а так enterprisesWork ? enterprisesWork.name - имя
}

console.log(getEnterpriseByDepartment(1))
console.log(getEnterpriseByDepartment(6))