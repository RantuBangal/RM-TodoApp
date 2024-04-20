const mongoose = require('mongoose');
const express = require('express');
const { TaskModel } = require('../model/task.model');
require('dotenv').config();


//router middleware
const taskRouter = express.Router();



//get all tasks route
taskRouter.get("/", async (req, res) => {
    try {
        const { userId } = req.body;
        const usersTasks = await TaskModel.find({userId}) ;
        res.status(200).json({tasks: usersTasks});
    } catch (err) {
        res.status(500).json({msg: "Internal Server Error", err});
    }
})


//get single task by id route
taskRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const usersTask = await TaskModel.findOne({_id: id, userId}); ;
        res.status(200).json({tasks: usersTask});
    } catch (err) {
        res.status(500).json({msg: "Internal Server Error", err});
    }
})



//add task route
taskRouter.post("/add", async (req, res) => {
    try {
        const { title, status } = req.body;
        const newTask = new TaskModel({ title, status });
        await newTask.save();
        res.status(200).json({msg: "Task Added Successfully", newTask});
    } catch (err) {
        res.status(500).json({msg: "Internal Server Error", err});
    }
})



//update task route
taskRouter.patch("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, status } = req.body;
        const updatedTask = await TaskModel.findByIdAndUpdate({_id: id}, { title, status });
        res.status(200).json({msg: "Task Updated Successfully", updatedTask});
    } catch (err) {
        res.status(500).json({msg: "Internal Server Error", err});
    }
})



//delete task route
taskRouter.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await TaskModel.findByIdAndDelete({_id: id});
        res.status(200).json({msg: "Task Deleted Successfully", deletedTask});
    } catch (err) {
        res.status(500).json({msg: "Internal Server Error", err});
    }
})



//exporting task route
module.exports = {
    taskRouter
}