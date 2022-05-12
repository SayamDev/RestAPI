const { Router } = require("express");
const { undoHashPass } = require("../middleware/index");

const loginRouter = Router();

loginRouter.post("/login", undoHashPass);

module.exports = loginRouter;