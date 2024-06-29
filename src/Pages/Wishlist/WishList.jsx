import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../Context/WishListcontext/WishList.Context'
import Loading from '../../Components/Loading/Loading'
import { cartContext } from '../../Context/UserContext/cart.context'
import { Helmet } from 'react-helmet'

export default function WishList() {
const {removeItemsFromWishlist,getLogedUserWishList,wishInfo} = useContext(WishlistContext)
const{addProductToCart}=useContext(cartContext)

useEffect(()=>{
  getLogedUserWishList()
},[])




  return <>
   <Helmet>
    <title>WishList</title>
    <meta name="description" content="WishList" />
  </Helmet>
  {wishInfo === null ? <Loading/> : <>
    <section className='p-5 bg-slate-100 rounded mt-2'>
     {wishInfo.count === 0 ?  <div className='flex flex-col justify-center items-center py-10'>
      <h2 className='mb-4'>WishList <i className="fa-solid fa-heart"></i></h2>
      <p className='mb-4'>there are not items yet</p>
      <Link to="/" className='uppercase bg-primary btn-primary'>add your first product to Wishlist</Link>
      </div>:  (<div>
          <div  className='flex flex-col justify-center items-center mb-10'>
          <i className="text-primary fa-regular fa-heart text-2xl"></i>
          <h2 className='text-3xl font-bold'>My wishlist</h2>
          </div>
              <div className='grid grid-cols-12  p-4 gap-3'>
              {wishInfo.data.map((wishlist)=>
   (<>
    <div className='col-span-12 md:col-span-4 xl:col-span-4 2xl:col-span-3 shadow-md rounded overflow-hidden '>
    <div className='flex flex-col'>
      <img src={wishlist.imageCover} alt='' className='w-full ' />
   <div className='p-2'>
   <h3 className='font-bold text-primary'>{wishlist.category.name}</h3>
    <h4 className='my-2'>{wishlist.price}L.E</h4>
   <div className='flex items-center justify-between gap-4'>
   <button className='w-fit btn btn-primary' onClick={()=>{addProductToCart({id:wishlist.id})}}>Add To cart</button>
    <div onClick={()=>{removeItemsFromWishlist({id:wishlist.id})}}>
      <i className="text-primary text-xl fa-solid fa-trash-can cursor-pointer"></i>
      </div>
   </div>
   </div>
    </div>

    </div>
    </>)
             )}
              </div>
           
          </div>
            )}
    </section>
    </>}
    </>
  
}
