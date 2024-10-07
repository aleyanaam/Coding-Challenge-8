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

//Task 5
// Create departments
const engineering = new Department('Engineering');
const sales = new Department('Sales');

// Create employees
const engineerAlice = new Employee('Joe', 100000, 'Engineer', engineering.name);
const engineerBob = new Employee('John', 50000, 'Engineering intern', engineering.name);
const managerDavid = new Manager('Alison', 90000, 'Engineering', 15000); // Manager with bonus

const salesRepEve = new Employee('Adam', 85000, 'Sales Representative', sales.name);
const salesRepFrank = new Employee('Fred', 70000, 'Junior Sales Rep', sales.name);
const managerGrace = new Manager('Ava', 105000, 'Sales', 20000); // Manager with bonus

// Assign employees to departments
engineering.addEmployee(engineerAlice);
engineering.addEmployee(engineerBob);
engineering.addEmployee(managerDavid);

sales.addEmployee(salesRepEve);
sales.addEmployee(salesRepFrank);
sales.addEmployee(managerGrace);

