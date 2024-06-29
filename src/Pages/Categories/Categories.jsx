import React from 'react'
import Loading from '../../Components/Loading/Loading'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Categories() {
    async function getAllCategories(){ 
        let options = {
          url:'https://ecommerce.routemisr.com/api/v1/categories',
          method:'GET'
        }
      return axios.request(options)
    }

    let {data,isLoading,error} = useQuery({
        queryKey:['categoeies'],
        queryFn: getAllCategories,
      })
      
      if(isLoading){
      return<Loading/>
      }
      
  
  return <>
  <Helmet>
    <title>Categories</title>
    <meta name="description" content="Categories" />
  </Helmet>
  <div className='grid grid-cols-12 gap-3'>
{data.data.data.map((category)=>
   ( <div className='col-span-12 md:col-span-4 xl:col-span-4 2xl:col-span-3 rounded overflow-hidden shadow-md mb-4 flex flex-col justify-center items-center' >
   <Link to={`/category/${category._id}`}>
       <img src={category.image} className='w-full h-80 object-contain'/>
        <h3 className='p-2 text-primary font-bold'>{category.name}</h3>
       </Link>
   </div>)
)}
  </div>
  </>
}
