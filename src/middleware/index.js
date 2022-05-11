const bcrypt = require("bcryptjs");

// function to scramble password on user sign up
        //next parameter = built in express,  will allow u to go to the next function
exports.hashPass = async (req, res, next) => {
    try {
        // set the password value in JSON object to hashed version
        req.body.pass = await bcrypt.hash(req.body.pass, 8);
        // express function to move onto next function
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};