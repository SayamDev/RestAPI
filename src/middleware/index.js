const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

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


exports.undoHashPass = async(req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username})
        if (await bcrypt.compare(req.body.pass, user.pass)) {
        res.status(200).send({message: "Successfully Logged In"});
        next();
    } else {
        res.status(500).send({
            message: "Login Unsuccessful "
        })
    }
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}