import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'

export default function CategorySlider() {

const [categeorys,setcategeory] =useState(null)
async function getAllCategorys(){
  let options = {
    url:'https://ecommerce.routemisr.com/api/v1/categories',
    method:'GET'
  }
  let {data}=await axios.request(options)
setcategeory(data.data)
 }

useEffect(()=>{
    getAllCategorys()
},[])
  return <>
  {categeorys? <section className='mb-3'><h2 className='font-bold mb-3 text-lg'>Shop popular category</h2>
  <swiper-container loop={true} 
 
 slides-per-view={4}>
    {categeorys.map((category)=>
    <swiper-slide key={category._id}>
       <Link to={`category/${category._id}`}>
       <img src={category.image} className='w-full h-80 object-cover'/>
        <h3 className='text-primary font-bold' >{category.name}</h3>
       </Link>
    </swiper-slide>
    )}
  </swiper-container>

  </section> :<Loading/>}

  </>
}
