// Require functions and libraries that we need for this file
const { Router } = require("express");
const { addUser} = require("./userController");
const { hashPass } = require("../middleware/index");
const userRouter = Router();

// create user endpoint with POST http verb and 
// run the function once the endpoint is hit.
userRouter.post("/user",hashPass, addUser, );

module.exports = userRouter;