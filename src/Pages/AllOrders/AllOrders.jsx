import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/UserContext/User.Context'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import Loading from '../../Components/Loading/Loading'
import { Helmet } from 'react-helmet'

export default function AllOrders() {
    let [orders,setorders] = useState(null)
    const {token}= useContext(UserContext)
    const {id} = jwtDecode(token)
    async function getUsersOrders(){
        let option = {
            url:`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
            method:'GET'
        }
        let {data} = await axios.request(option)
        setorders(data)
    }
    useEffect(()=>{
        getUsersOrders()
    },[])


  return <>
  {!orders ?<Loading/> :(orders.map((order)=>(
    
   <>
   <Helmet>
    <title>Orders</title>
    <meta name="description" content="Orders" />
   </Helmet>
    <div className='allOrders border-2 border-gray rounded p-3 mt-3'>
    <div className='flex items-center justify-between'>
        <div>
            <h2 className='text-gray-500'>order ID</h2>
            <h3>#{order.id}</h3>
        </div>
        <div>
           {order.isDelivered ? <button className='btn-primary bg-lime-500 rounded-full mr-2 font-cairo'>تم التوصيل</button>:
            <button className='btn-primary bg-blue-600 rounded-full mr-2 font-cairo'>قيد التوصيل</button>}
            {order.isPaid ? <button className='btn-primary bg-lime-500 rounded-full font-cairo'>تم مدفوع</button>:
            <button className='btn-primary bg-red-600 rounded-full font-cairo'>غير مدفوع</button>}
        </div>
    </div>
    <div className='grid grid-cols-12 gap-3'>
   {order.cartItems.map((product)=>(
     <div className='col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2 rounded p-2 border-2 mt-3 '>
     <img src={product.product.imageCover} alt='' className='w-full h-32 object-contain'></img>
     <h3 className='font-bold mt-1'> {product.product.title}</h3>
     <p className='text-gray-600'>{product.price} L.E</p>
         </div>
   ))}
    
    </div>
      </div>
   
   </>
  ))) }
  </>
}
