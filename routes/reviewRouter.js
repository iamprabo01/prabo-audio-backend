import express from "express"
import {addReview, getReviews} from "../controller/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/",addReview)
reviewRouter.get("/",getReviews)


export default reviewRouter;