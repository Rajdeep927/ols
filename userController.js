const jwt = require('jsonwebtoken')
const { CreateAuth, FindEmail} = require('../model/userModel')

const CreateUser = async (req, res) => {
    const {email, uid, createdAt} = req.body;

    if (!email || !uid) {
        return res.status(400).json({message : "all fields requires"})
    }
    try {
        const result = CreateAuth({email, uid, createdAt})
        return res.status(200).json({message : "User created successfully", result})
    } catch (error) {
        if(error.code === 11000){
            return res.status(400).json({message : "User already exists"})
        }

        return res.status(500).json({message : "Internal server error"})
    }
}

const GetUser = async (req,res) => {
    const {email} = req.body;
    try{
    const result = FindEmail({email})
    return res.status(200).json({message : "User found", result})
    } catch (error) {
        return res.status(500).json({message : "Internal server error"})
    }
}

module.exports = {
    CreateUser, GetUser
}