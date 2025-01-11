import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({

    id:{
        type:Number,
        required:true,
        unique:true
    }
    email:{
        type:String,
        required:true,
        unique:true
    },

    message:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    date:{
        type:date,
        required:true,
        default:date.now()
    },

    response:{
        type:String,
        required:false,
        default:""
    },

    isResolved:{
        type:Boolean,
        required:true,
        default:false 
    }
})

const inquiry = mongoose.model("Inquiry",inquirySchema);

export default inquiry;