// Express Instance
const express = require('express');

// Router Instance
const router = express.Router();

// Import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo , getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

// Define API Routes
// Path ko controller se map kara diya hai
router.post("/createTodo" , createTodo);
router.get("/getTodos" , getTodo);
router.get("/getTodos/:id" , getTodoById);
router.put("/updateTodo/:id" , updateTodo);
router.delete("/deleteTodo/:id" , deleteTodo);

module.exports = router;
