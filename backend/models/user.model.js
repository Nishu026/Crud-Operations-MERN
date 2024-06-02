import {mongoose,Schema} from "mongoose";

const userSchema = new Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
        lowercase:true, //convertinput to lowercase
        unique:true
     },
     age:{
        type:Number
     }
},{timestamps:true});


export const User = mongoose.model('User',userSchema);

