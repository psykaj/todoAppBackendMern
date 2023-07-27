const mongoose = require('mongoose');

// whichever things are define in .env file that can be load into the process object
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser : true , 
        useUnifiedTopology : true,
    })
    .then( () => console.log("Connection established successfully"))
    .catch( (error) => {
        console.log("Error recieved , Issue in db connection");
        console.log(error.message);

        // End the process with some failure
        process.exit(1);
    })
}

// Backend export syntax
module.exports = dbConnect;