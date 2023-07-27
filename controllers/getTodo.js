// Import the model
const Todo = require("../models/Todo");

// define route handler for routes (just like => eventHandler for events) 
exports.getTodo = async(req,res) => {
    try {
        // fetch all todos item from database
        const todos = await Todo.find({});
        
        // Response
        res.status(200)
        .json({
            success : true,
            data : todos,
            message : "Entire data fetched",
        })
    }
    catch(error) {
        console.log(error);
        res.status(500)
        .json({
            success : false,
            error : error.message,
            message : "Server Error",
        })
    }
}

// define route handler for routes (just like => eventHandler for events) 
exports.getTodoById = async(req,res) => {
    try {
        // Fetch todo item basis on Id
        const id = req.params.id;
        const todo = await Todo.findById( {_id : id})

        // Data for given id not found
        if(!todo) {
            return res.status(404).json({
                success : false,
                message : "No data foundwith given id",
            })
        }

        // Data for given id found
        res.status(200)
        .json({
            success : true,
            data : todo,
            message : `Todo ${id} successfully fetched`,
        })
    }
    catch(error) {
        console.log(error);
        res.status(500)
        .json({
            success : false,
            error : error.message,
            message : "Server Error",
        })
    }
}
