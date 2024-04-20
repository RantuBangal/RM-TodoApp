const express = require('express');
const cors = require('cors');
const { taskRouter } = require('./route/task.route');
const { connectionDB } = require('./config/db');
const PORT = 8080;



//initializing the app
const app = express();



//middlewares
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use('/tasks', taskRouter);



//routes
app.get('/', (req, res) => {
    res.status(200).json({msg: 'Welcome to the backend of Task Manager App'})
})




//listening to the port
app.listen(PORT, async () => {
    try{
        await connectionDB;
        console.log(`Listening on port ${PORT}`);
        console.log(`Database connected successfully`);
    }
    catch(err){
        console.log(err);
    }
})