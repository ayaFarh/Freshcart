import React, { useState } from 'react'
import Loading from '../../Components/Loading/Loading'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function CategoreisDetails() {
    let {id} = useParams()
    async function getCategoriesDetails(){ 
        let options = {
          url:`https://ecommerce.routemisr.com/api/v1/categories/${id}`,
          method:'GET'
        }
      return axios.request(options)
    }

    let {data,isLoading,error} = useQuery({
        queryKey:['categoeiesDetails'],
        queryFn: getCategoriesDetails,
      })
      
      if(isLoading){
      return<Loading/>
      }




  return <>
  <div className='grid grid-cols-12 gap-3'>
    <div className='col-span-12 sm:col-span-6  md:col-span-5 lg:col-span-5 xl:col-span-5'>
  <img src={data.data.data.image} alt='' className='w-full'/>
    </div>
    <div className='text-primary col-span-12 sm:col-span-6  md:col-span-5 lg:col-span-5 xl:col-span-4 font-bold'>{data.data.data.name}</div>
  </div>
  </>
}