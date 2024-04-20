const mongoose = require('mongoose');


//creating Task schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["active", "completed"], 
        required: true,
        default: "active"
    }
},{
    versionKey: false
})



//creating Task model
const TaskModel = mongoose.model('tasks', taskSchema);


//exporting Task model
module.exports = {
    TaskModel
}