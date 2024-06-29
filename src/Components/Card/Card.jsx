import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/UserContext/cart.context'
import { WishlistContext } from '../../Context/WishListcontext/WishList.Context'

export default function Card({productInfo}) {
  const {images,title,price,category,ratingsAverage,id} = productInfo
  const {addProductToCart} = useContext(cartContext)
  const {addProductToWishList,wishInfo,getLogedUserWishList} = useContext(WishlistContext)
 
  useEffect(()=>{
    getLogedUserWishList()
  },[])

  return <>
  <div className='inner p-4  col-span-12 sm:col-span-6  md:col-span-4 lg:col-span-3 xl:col-span-2 '>
<div className='rounded overflow-hidden shadow-md'>
    <div className='relative'>
    <img className='w-full' 
    src={images[0]} alt='' />
    <div className='layer opacity-0 hover:opacity-100  transition-opicity duration-300 flex items-center justify-center  absolute left-0 top-0 bg-black w-full h-full bg-opacity-25 '>
   <div className='flex gap-3'>
   <div onClick={()=>{addProductToWishList({id})}} className='icon  hover:scale-110 transition-transform duration-300 hover:rotate-6 text-md w-10 h-10 bg-primary rounded-full text-white flex items-center justify-center cursor-pointer' >
    <i className="fa-solid fa-heart"></i>
    </div>
    <Link to={`/product/${id}`} className='icon hover:scale-110 transition-transform duration-300 hover:rotate-6 text-md w-10 h-10 bg-primary rounded-full text-white flex items-center justify-center cursor-pointer'>
    <i className="fa-solid fa-eye"></i>
    </Link>
    <div onClick={()=>{addProductToCart({id})}} className='icon hover:scale-110 transition-transform duration-300 hover:rotate-6 text-md w-10 h-10 bg-primary rounded-full text-white flex items-center justify-center cursor-pointer'>
    <i className="fa-solid fa-cart-shopping"></i>
    </div>
   </div>
   

    </div>
    </div>
    <div className=' p-3'>
    <h3 className='text-primary font-bold'>{category.name}</h3>
    <p className='line-clamp-1'>{title}</p>
    <div className='flex items-center justify-between mt-3'>
        <p>{price} L.E</p>
        <p><i className="fa-solid fa-star text-yellow-500"></i> <span>{ratingsAverage}</span></p>
    </div>
    </div>
</div>
  </div>
  
  </>
}
