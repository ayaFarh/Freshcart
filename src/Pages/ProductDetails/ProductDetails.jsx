import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import ReactImageGallery from 'react-image-gallery';
import { cartContext } from '../../Context/UserContext/cart.context';
import { Helmet } from 'react-helmet';

export default function ProductDetails() {
let {id} = useParams()
let [product,setProduct]=useState(null)
let {addProductToCart} = useContext(cartContext)
    
async function getProductDetails(){
let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
setProduct(data.data)
}

useEffect(()=>{
    getProductDetails()
},[])

let imageitems = product?.images.map((imageurl)=>{
    return {
        original:imageurl,
        thumbnail:imageurl,
    }
})



  return <>
  {product === null?<Loading/>:
 <>
<Helmet>
    <title>{product.title}</title>
    <meta name="description" content={product.description} />
</Helmet>
<div className='grid grid-cols-12 gap-3'>
    <div className='col-span-12 md:col-span-5 xl:col-span-4 2xl:col-span-4 '>
<ReactImageGallery items={imageitems} showFullscreenButton={false} showNav={false} showPlayButton={false}/>

</div>
    <div className='col-span-12 md:col-span-7 xl:col-span-8 2xl:col-span-8 flex justify-center items-start flex-col '>
        <h1 className='font-semibold  text-xl'>{product.title}</h1>
        <h2 className='text-primary font-bold my-1'>{product.category.name}</h2>
        <p>{product.description}</p>
        <div className='flex justify-between items-center mt-2'>
            <span>{product.price} L.E</span>
            <span><i className="fa-solid fa-star text-yellow-400"></i> {product.ratingsAverage} </span>
        </div>
        <button className='bg-primary w-full rounded mt-3 p-1 text-white' onClick={()=>{addProductToCart({id:product.id})}}>Add to card</button>
    </div>
    
    </div>
 </>
   
    }
  
  </>
}
