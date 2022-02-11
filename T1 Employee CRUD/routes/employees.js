const express = require("express");

const  employee = require("../controllers/employees"); 

const router = express.Router();

router.get('/', employee.getEmployees);
router.get('/:id', employee.getEmployeeById);
router.post('/', employee.createEmployee);
router.patch('/:id', employee.updateEmployee);
router.delete('/:id', employee.deleteEmployee);

module.exports=router;