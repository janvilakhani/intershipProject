const express= require('express');
const mongoose= require('mongoose');
const Employee = require('../models/employeeData.js');

const router= express.Router();

const getEmployees = async (_, res) => {
    try {
        const emp= await Employee.find();
        
        res.status(200).json(emp);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getEmployeeById = async (req,res) => {
    const roll = req.params.id;

    try {
        const emp = await Employee.findOne({_id:id});

        res.status(200).json(emp);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createEmployee =  async (req, res) => {
    console.log(req.body);
    const newEmp = new Employee({
        name:req.body.name,
        salary:req.body.salary,
        department:req.body.department

    })
    try {
        await newstudent.save();

        res.status(201).json(newEmp);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updateEmployee = async (req, res) => {
    const roll= req.params.id;
    try{
        await Student.findOneAndUpdate({_id:id},
        {   
            name:req.body.name,
            salary:req.body.salary,
            department:req.body.department    
        }
        )
        res.status(202).json({_id:idl});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deleteEmployee = async (req, res) => {
    const roll= req.params.id;

    try {
        await Student.findOneAndRemove({_id:id});
        res.status(203).json({_id:id});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports={getEmployees,getEmployeeById,createEmployee,updateEmployee,deleteEmployee}