import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import axios from 'axios'
import Loading from '../../Components/Loading/Loading'
import HomSlider from '../../Components/HomeSlider/HomSlider'
import CategorySlider from '../../Components/CatrgorySlider/CategorySlider'
import { useQuery } from 'react-query'
import { Helmet } from 'react-helmet'

export default function Products() {
async function getProudacts(){ 
  let options = {
    url:'https://ecommerce.routemisr.com/api/v1/products',
    method:'GET'
  }
return axios.request(options)
}

let {data,isLoading,error} = useQuery({
  queryKey:['products'],
  queryFn: getProudacts,
})
if(isLoading){
return<Loading/>
}

  return <>
  <Helmet>
    <title>Products</title>
    <meta name="description" content="Products" />
  </Helmet>
  
  <div className='grid grid-cols-12'>{data.data.data.map((product)=> <Card productInfo= {product} key={product._id}/>)}</div>
  
  </>
}