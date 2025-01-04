import express from "express"
import {addReview, approveReview, deleteReview, getReviews} from "../controller/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/",addReview)
reviewRouter.get("/",getReviews)
reviewRouter.delete("/:email",deleteReview)
reviewRouter.put("/approve/:email",approveReview)

/*reviewRouter.get("/approved",
    (req,res)=>{
        console.log("this is approved route")
    }
)

reviewRouter.get("/:email",
    (req,res)=>{
        console.log("this is email route")
    }
)*/


export default reviewRouter;