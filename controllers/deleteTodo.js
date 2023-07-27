// Import the model
const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res) => {
    try {
        // fetch id from the db
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success : true,
            message : "Todo deleted sucessfully",
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