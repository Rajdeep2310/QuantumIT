const express = require('express'); 
const userRouter = express.Router();
const { registerUser, loginUser , getAllUsers } = require('../Controllers/userControllers');
const verifyToken = require('../Middlewares/verifyToken');
//user authentication routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/get-users', verifyToken,  getAllUsers);

module.exports = userRouter;