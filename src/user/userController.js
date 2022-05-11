const User = require("./userModel");

// create a function to add a new user to our database
// using User schema to add JSON data for sign up

//add user
exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    // let the user know they have signed up successfully
    // by displaying the username
    res.status(200).send({ user: newUser.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};


//list user
exports.listUsers = async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).send({ allUsers });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error.message })
    } 
};

//delete user
exports.deleteUser = async (req, res) => {
    try {
      const delUser = await User.deleteOne(req.body);
      res.status(200).send({ user: delUser });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message });
    }
  };


  //update user
  exports.updateUser = async (req, res) => {
    try {
      const updUser = await User.updateOne(
        { username: req.body.username },
        { $set: { email: req.body.email } }
      );
      res.status(200).send({ user: updUser });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message });
    }
  };
  




// {"username": "sayam1", "email": "sayam@gmail.com", "pass": "pass1234"} - insomnia (POST)
// just need to enter the address  and select the GET option: http://localhost:5001/user = this will list all of the users
// Select DELETE and enter in JSON = {"username" : "sayam22"} 
//