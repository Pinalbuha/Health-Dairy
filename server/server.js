"use strict";

// import the needed node_modules.
const express = require("express");
//const morgan = require("morgan");

const {
    getAllUsers,
    getUsersById,
    addUser,
    updateUser
} = require("./handlers");

express()
    // Below are methods that are included in express(). We chain them for convenience.
    // --------------------------------------------------------------------------------

    // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
    // .use(morgan("tiny"))
    .use(express.json())
    .use(express.urlencoded({extended:false}))
    // Any requests for static files will go into the public folder
    .use(express.static("public"))

    // Nothing to modify above this line
    // ---------------------------------
    
    .get("/api/users", getAllUsers)
    .get("/api/users/:_id", getUsersById)
    .post("/api/add-users", addUser)
    .patch("/api/update-user", updateUser)
    

    // ---------------------------------
    // Nothing to modify below this line

   // this is our catch all endpoint.
    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })

    // Node spins up our server and sets it to listen on port 8000.
    .listen(8000, () => console.log(`Listening on port 8000`));