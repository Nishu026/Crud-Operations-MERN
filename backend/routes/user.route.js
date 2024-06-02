import express from 'express';

import { User } from '../models/user.model.js';

const router = express.Router();



//post request to create user in db
router.post('/users', async (req, res) => {
    try {
        const { name, email, age } = req.body; // to get field names from frontend
        const user = await User.create({ name:name, email:email, age:age });//1st name from frontend
        res.status(200).json(user); 
    } catch (error) {
        res.status(400).json({error:error.message});
    }
})

//get request to get all users from db
router.get('/getusers', async (req, res) => {
    try {
       const getUsers = await User.find({}) ;
       res.status(200).json(getUsers);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

//find Single User by ID
router.get('/singleuser/:id',async (req, res) => {
    const { id } = req.params; //to get id from url we use req.params
    try{
        const findSingleUser= await User.findById({_id:id});
        res.status(200).json(findSingleUser);
    }catch(error){
        res.status(500).json({error:error.message});
    }
})

//deleting user by their ID
router.delete('/deleteuser/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await User.findByIdAndDelete({_id:id});
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

router.patch('/updateuser/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body,{new:true});  //to update user with modified 
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

//updating user by their ID




export default router
