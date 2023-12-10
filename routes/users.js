import express from "express";
const authRouter = express.Router();
import User from "../models/users.js";
// import postModel from "../models/post.js";

authRouter.get("/createuser", async function(req,res,next){
    let createdUser = await User.create({
        username:"rehman",
        password:"23456",
        posts:[],
        email:"rehman@gmail.com",
        fullName:"Abdul Rehman"
    });
    res.send(createdUser);
});

export default authRouter;