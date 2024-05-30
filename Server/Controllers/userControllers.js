const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const registerUser = async (req, res) => {
  try{
    const { name, dateOfBirth, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User 
    ({
      name,
      dateOfBirth,
      email,
      password: hashedPassword
    });
    await newUser.save();
    res.status(200).json({message:"User created successfully"});
  }catch(error){
    console.log(error)
    res.status(500).json({message:"User not created"});
  }
};

const loginUser = async (req, res) => {
  try{
    const{ email , password} = req.body;
    const validUser = await User.findOne({email:email});
    // Finding User exists or not:
    if(!validUser) {
        return res.status(400).json({message:"Not a valid user..."})
    }
    const validPassword = bcrypt.compareSync(password,validUser.password)

    if(!validPassword){
        return res.status(400).json({message:"Wrong Credentials..."})
    }
    // creating token here:
    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
    const { password: pass, ...rest} = validUser._doc;

    res.status(200).json({token,...rest})
}catch(error){
    res.status(400).json({message:"User not logged in ..."})
}
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
    registerUser, loginUser , getAllUsers
};
