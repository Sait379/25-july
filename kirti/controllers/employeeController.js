
import fs from 'fs/promises';
// const filePath = './employee.json';

// in-memory employee list (mock data)

export let employees = [
  {
    emp_id: 1,
    employee_name: "Alice Sharma",
    job_role: "Software Developer",
    salary: 75000,
    department: "Engineering"
  },
  {
    emp_id: 2,
    employee_name: "Rohit Mehra",
    job_role: "UI/UX Designer",
    salary: 65000,
    department: "Design"
  },
  {
    emp_id: 3,
    employee_name: "Neha Verma",
    job_role: "Product Manager",
    salary: 90000,
    department: "Product"
  }
];


export function getAllEmployees(req, res) {
  res.status(200).json(employees);
}

export function getEmployeeById(req, res) {
  const id = parseInt(req.params.id);
  const emp = employees.find(e => e.emp_id === id);

  if (!emp) {
    return res.status(404).json({ error: "Employee not found" });
  }

  res.status(200).json(emp);
}


export function addEmployee(req, res) {
  const { employee_name, job_role, salary, department } = req.body;

  const newEmp = {
    emp_id: parseInt(employees.length + 1),
    employee_name,
    job_role,
    salary,
    department
  };

  employees.push(newEmp);
  res.status(201).json(newEmp);
}



export function updateEmployee(req, res) {
  const id = parseInt(req.params.id);
  const index = employees.findIndex(e => e.emp_id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Employee not found" });
  }

  employees[index] = { ...employees[index], ...req.body };
  res.status(200).json(employees[index]);
}

export function deleteEmployee(req, res) {
  const id = parseInt(req.params.id);
  const index = employees.findIndex(e => e.emp_id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Employee not found" });
  }

  const removed = employees.splice(index, 1);
  res.status(200).json({ message: "Deleted successfully", removed });
}
