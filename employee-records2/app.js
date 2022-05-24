// create an emptied array of employees
var employees = [ ] 
 //   console.log(employees)

 function Employees( name, occupation, salary, status = "FullTime") { 
    this.name = name
    this.occupation = occupation
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function() { 
        console.log(name + occupation + salary + status)
    }
 }  

 const newEmployee1 = new Employees("Elijah", "Police Officer", "$50,000", "Part Time")
 const newEmployee2 = new Employees("Lily", "Singer", "$75,000", "Contractor")
 const newEmployee3 = new Employees("Kristina", "President", "$1,000,000", status) 

//  newEmployee1.printEmployeeForm
//  newEmployee2.printEmployeeForm
//  newEmployee3.printEmployeeForm

 employees.push(newEmployee1, newEmployee2, newEmployee3)
    console.log(employees)