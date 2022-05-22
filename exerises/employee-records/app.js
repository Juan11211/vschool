// create an emptied array of employees
var employees = [ ] 
 //   console.log(employees)

 function Employee( name, occupation, salary, status = "Full time") { 
    this.name = name
    this.occupation = occupation
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function() {
      return this.name + " is a " + this.occupation
    }

 }  
 
 var job1 = new Employee("Elijah", "Police Officer", "$50,000", "Part time")
 console.log(job1)
var job2 = new Employee("Jamie", "Bartender", "$45,000", "Full time") 
  console.log(job2)
var job3 = new Employee("Kristina", "Doctor", "200,000", "full time")
    console.log(job3)
employees.push(job1, job2, job3)



    