import express from 'express'
import {addProduct,getProducts} from '../controller/productController.js'

const productRouter = express.Router();
 
productRouter.post("/",addProduct)
productRouter.get("/",getProducts)

export default productRouter;