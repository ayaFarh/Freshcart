import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "./User.Context";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading/Loading";


export const cartContext = createContext()
export default function CartProvider({children}){
    let {token} = useContext(UserContext)
    const[cartInfo,setcartInfo] = useState(null)
async function addProductToCart({id}){
   try {
    let options = {
        url:"https://ecommerce.routemisr.com/api/v1/cart",
        method: "POST",
        headers:{
            token,
        },
        data:{
            productId: id
        }
    }

let {data} = await axios.request(options)
console.log(data);
toast.success("product added to cart")
setcartInfo(data)
    
   } catch (error) {
    console.log(error);
   }
}
async function getCartInfo(){
    try {
        let options = {
            url:"https://ecommerce.routemisr.com/api/v1/cart",
            method:"GET",
            headers:{
                token,
            }
        }
        let {data} = await axios.request(options)
        setcartInfo(data)
    } catch (error){
        if(error.response.data.message.includes("No cart")){
            setcartInfo([])
        }
    }

}






async function removeItemsFromCart({id}){
   try {
    let options ={
        url:`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method:'DELETE',
        headers:{
            token,

        },
    } 
let {data} = await axios.request(options)
toast.success("product deleted successfully")

if(data.numOfCartItems === 0){
    setcartInfo([])
}else{
    setcartInfo(data)
}
   } catch (error) {
    console.log(error);
   }
}

async function upduteItemsCart({id,count}){
    try {
     let options ={
         url:`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
         method:'PUT',
         headers:{
             token,
         },
         data:{
              count,
         }
     } 
 let {data} = await axios.request(options)
 
 setcartInfo(data)
    } catch (error) {
     console.log(error);
    }
 }

 async function clearCart(){
    try {
     let options ={
         url:`https://ecommerce.routemisr.com/api/v1/cart`,
         method:'DELETE',
         headers:{
             token,
         }
     } 
 let {data} = await axios.request(options)
 
 if(data.message === "success"){
    setcartInfo([])
 }
    } catch (error) {
     console.log(error);
    }
 }




    return <>
    <cartContext.Provider value={{addProductToCart,getCartInfo, cartInfo,removeItemsFromCart,upduteItemsCart,clearCart,setcartInfo}}>
       {children}
    </cartContext.Provider>
    </>
    }

