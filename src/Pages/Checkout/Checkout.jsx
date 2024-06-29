import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/UserContext/User.Context'
import { cartContext } from '../../Context/UserContext/cart.context'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Checkout(values) {
  let navigate = useNavigate()
    let {token} = useContext(UserContext)
    let {cartInfo,setcartInfo}= useContext(cartContext)
   let [ordertype,setordertype] = useState()
   async function createcashorder(){
  let options ={
    url:`https://ecommerce.routemisr.com/api/v1/orders/${cartInfo.data._id}`,
    method:'POST',
    headers:{
        token,
    }, 
    data:{
   values,
    }
  }

  let {data} = await axios.request(options)
  console.log(data);
  setcartInfo([])
  navigate("/allOrders")
    }

    async function createonlinePayment(values){
        console.log("online");
        let options = {
          url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo.data._id}?url=http://localhost:3000`,
          method:'POST',
          headers:{
              token,
          }, 
          data:{
         values,
          }
        }
    
      
        let {data} = await axios.request(options)
        console.log(data);
        if(data.status === "success"){
            window.location.href = data.session.url
        }
    }
          
const formik = useFormik({
    initialValues:{
            shippingAddress:{
                details: "",
                phone: "",
                city: ""
                }
    },
    onSubmit:(values)=>{
       if(ordertype === "cash"){
        createcashorder(values)
       }else{
        createonlinePayment(values)
       }
    }
})

  return <>
  <p className='font-bold text-xl mb-3'>Shipping Addrees</p>
  <form onSubmit={formik.handleSubmit}>
<input className=' form-control w-full' type='text' name='shippingAddress.city' placeholder='City' value={formik.values.shippingAddress.city} onChange={formik.handleChange}/>
<input className='form-control w-full my-3' type='tel' name='shippingAddress.phone' placeholder='Phone' value={formik.values.shippingAddress.phone} onChange={formik.handleChange} />
<textarea className='form-control w-full mb-3'  name='shippingAddress.details' placeholder='details' value={formik.values.shippingAddress.details} onChange={formik.handleChange}/>
<button onClick={()=>{setordertype("cash")}} type='submit' className='btn-primary bg-blue-600 uppercase mr-2'>cash order</button>
<button onClick={()=>{setordertype("online")}} type='submit' className='btn-primary  uppercase'>online bayment</button>
  </form>
  
  </>
}
