//Task 1
//Creation of class with relevant employee information
class Employee {
    constructor(name, salary, position, department) {
      this.name = name;
      this.salary = salary;
      this.position = position;
      this.department = department;
      
    }
  
    getDetails() {
      console.log(`${this.name} works as a ${this.position} earning $${this.salary} per year.`);
    }
  }