import { Request, Response } from "express";
import config from "../../config";
import { Order } from "./order.interface";
import { orderServices } from "./order.services";
import { productServices } from "../Bicyle/bicyle.services";


const createOrder = async(req:Request,res:Response)=>{
 
 

  try {
    const order:Order = req.body;
    const OrderQuantity = order.quantity;
    const productId = order.product;
    const orderedProduct = await productServices.getASingleProductFromDB(productId);
    if (!orderedProduct) {
      return res.status(404).json({
        status: false,
        message: "Product not found",
      });
    }
    const orderedProductQuantity = orderedProduct?.quantity
    
    const orderProductUpdatedQuantity = orderedProductQuantity as number- OrderQuantity;
    console.log({OrderQuantity,orderedProductQuantity,orderProductUpdatedQuantity});

  if(orderedProductQuantity===0){
    res.status(400).json({
      status:false,
      message:"No product available in the stock",
     
    }) 
  }

 
  if(orderProductUpdatedQuantity < 0){
    res.status(400).json({
      status:false,
      message:"Not enough product in stock",
      available:`the number of available product is ${orderedProductQuantity}`
    }) 
  }
   
  await productServices.updateProductFromDB(productId,{quantity:orderProductUpdatedQuantity,
   inStock:orderProductUpdatedQuantity===0?false:true
  })

  const saveOrder = await orderServices.createOrderToDB(order);
    

    res.status(200).json({
          message: "Order created successfully",
          status: true,
          data: saveOrder
        })



  } catch (error:any) {
   
    res.status(500).json(
          {
            message: "Validation failed",
            status: false,
            error: error,
            stack:config.node_env==='development'? error.stack:undefined
          })
  }








}



export const orderControllers ={
  createOrder
}