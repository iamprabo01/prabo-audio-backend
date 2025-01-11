import inquiry from "../models/inquiry.js"
import { isItCustomer } from "./userController.js"

export async function addInquiry(req,res){
    
    try{
        if(isItCustomer(req)){
            const data = req.body
            data.email = req.user.email
            data.phone = req.user.phone

            let id=0;

            const inquiries = await inquiry.find().sort({id:-1}).limit(1);

            if(inquiries.lenght==0){
                id=1;
            }else{
                id=inquiries[0].id+1;
            }
        }

    }catch(e){
        res.status(500).json({
            message:"failed to add inquiry"
        })
    }
}