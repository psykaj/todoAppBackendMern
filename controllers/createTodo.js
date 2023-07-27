// Import the model
const Todo = require("../models/Todo");

// define route handler for routes (just like => eventHandler for events) 
exports.createTodo = async(req,res) => {
    try {
        // Extract title and description from request body
        const {title , description} = req.body;

        // create a new todo object & insert into db
        const response = await Todo.create({title,description});

        // send the json response with a success flag
        res.status(200).json(
            {
                success : true,
                data : response,
                message : "Entry created successfully",
            }
        );
    }
    catch(error) {
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success: false,
            data : "Internal server error",
            message : error.message,
        });
    }
}
