import express from 'express';
// import getEmployee from '../controllers/employeeController';
// import getParticularEmployee from '../controllers/employeeController';

const router = express.Router()

router.use(express.json())

import {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee
} from '../controllers/employeeController.js';



router.get('/employees', getAllEmployees);
router.get('/employees/:id', getEmployeeById);
router.post('/employees', addEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

export default router;
