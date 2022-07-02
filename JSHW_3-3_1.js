
// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

// Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:)


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
  
//   Задания:
//   1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
  
//   **Пример:**
  
//   Предприятие 1 (45 сотрудников)
//   - Отдел тестирования (10 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Администрация (15 человек)
//   Предприятие 2 (75 сотрудников)
//   - Отдел разработки (50 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Отдел охраны труда (5 сотрудников)
//   Предприятие 3 (нет сотрудников)
//   - Отдел аналитики (нет сотрудников)
  
console.log ('----- Задача JSHW_3-3_1 !СХЕМА! -----')

const employeesCountHelper = function (number) {
  lastNumber = number.toString().split('').pop()
  if (lastNumber && number) {
    if (lastNumber == 1) return `${number} сотрудник`
    else if (lastNumber > 1 && lastNumber <5) return `${number} сотрудника`
    else return `${number} сотрудников`
 }else return "нет сотрудников"
}

const getSructure = function(company) {
  company.forEach (comp => {
    let depts = []
    let count = 0
    depts.push (comp.name)
    if(comp.departments) {
      comp.departments.forEach(dept => {
        count += dept.employees_count
        depts.push (`- ${dept.name} ${employeesCountHelper(dept.employees_count)}`) 
      })
      depts [0] += ` (${employeesCountHelper(count)})`
    }
    console.log(depts.join(`\n\ `));
  })
}
getSructure(enterprises)