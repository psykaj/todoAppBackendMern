// const express = require('express');
// const app = express();

// // server activate
// app.listen(3000 , () => {
//     console.log("App is running succefully on port no. 3000");
// });

const express = require('express');
const app = express();

// Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000

// Middleware to parse json request body
app.use(express.json());

// Import routes from todo API
const todoRoutes = require("./routes/todos");

// mount the API routes
// Mount means => append,add
// api/v1 ko directory structure
app.use("/api/v1" , todoRoutes);

// Start server
app.listen(PORT , () => {
    console.log(`Server started successfully at port no. ${PORT}`);
})

// Connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Default Route
app.get("/" , (req,res) => {
    res.send(`<h1>This is my Homepage</h1>`);
})






