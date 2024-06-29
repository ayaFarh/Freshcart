import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../../Components/Loading/Loading'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Brands() {
    async function getAllBrands(){ 
        let options = {
          url:'https://ecommerce.routemisr.com/api/v1/brands',
          method:'GET'
        }
      return axios.request(options)
    }

    let {data,isLoading,error} = useQuery({
        queryKey:['Brands'],
        queryFn: getAllBrands,
      })
      
      if(isLoading){
      return<Loading/>
      }
   
  return <>
        <div className='grid grid-cols-12 gap-3'>
            {data.data.data.map((brand) => (
                <div key={brand._id} className='col-span-12 md:col-span-4 xl:col-span-4 2xl:col-span-3 rounded overflow-hidden shadow-md mb-4'>
                    <Link to={`/brands/${brand._id}`}>
                        <img src={brand.image} className='w-full h-80 object-contain' alt={brand.name} />
                        <h3 className='p-2'>{brand.name}</h3>
                    </Link>
                </div>
            ))}
        </div>
    </>
}

