// create an emptied array of employees
var employees = [ ] 
 //   console.log(employees)

 function Employees( name, occupation, salary, status) { 
    this.name = name
    this.occupation = occupation
    this.salary = salary
    this.status = status
 }  
 
 var macys = new Employees("Elijah", "Police Officer", "$50,000") 
console.log(macys)
    