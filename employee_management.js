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

//Task 2
class Department {
    constructor(name, employees) {
      this.name = name;
      this.employees = [];
      
    }
    
    addEmployee(employee) {
      this.employees[employee.name] = employee; 
      }
  
  getDepartmentSalary() {
          let salaryTotal = 0; 
  
         
          for (let i = 0; i < this.employees.length; i++) {
              salaryTotal += this.employees[i].salary; 
          }
  
          return salaryTotal; 
      }

      calculateTotalSalaryWithBonus() {
        let totalSalaryWithBonus = 0; 

        
        for (let i = 0; i < this.employees.length; i++) {
            const employee = this.employees[i];
            if (employee instanceof Manager) {
                totalSalaryWithBonus += employee.getTotalCompensation(); 
            } else {
                totalSalaryWithBonus += employee.salary; 
            }
        }

        return totalSalaryWithBonus; 
    }
  }

//Task 3
class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary, "Manager", department); 
        this.bonus = bonus; 
    
}
}

//Task 4 Check the Department class