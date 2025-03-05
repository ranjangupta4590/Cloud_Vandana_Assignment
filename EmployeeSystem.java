import java.util.ArrayList;
import java.util.List;

// Employee class
class Employee {
    private int id;
    private String name;
    private double salary;

    // Constructor
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + salary);
        System.out.println("-----------------------");
    }
}

// Main class
public class EmployeeSystem {
    public static void main(String[] args) {
        // Create list to store employees
        List<Employee> employeeList = new ArrayList<>();

        //Employee objects
        Employee emp1 = new Employee(1, "Ranjan Kumar", 50000);
        Employee emp2 = new Employee(2, "Pranjal Sharma", 60000);
        Employee emp3 = new Employee(3, "Aman Gupta", 55000);

        // Add employees to list
        employeeList.add(emp1);
        employeeList.add(emp2);
        employeeList.add(emp3);

        // Display details of all employees
        System.out.println("Employee Details:\n");
        for (Employee emp : employeeList) {
            emp.displayDetails();
        }
    }
}
