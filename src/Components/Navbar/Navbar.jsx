import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import freashcardImage from '../../assets/images/freshcart-logo.svg'
import { UserContext } from '../../Context/UserContext/User.Context'
import { cartContext } from '../../Context/UserContext/cart.context'
import { WishlistContext } from '../../Context/WishListcontext/WishList.Context'

export default function Navbar() {
  const [isVisable,setisVisable]=useState(false)
  const toggleVisable = ()=>{
    setisVisable(!isVisable)
  }
  
  const {token,logOut} = useContext(UserContext)
  const {getCartInfo,cartInfo} = useContext(cartContext)
  const {getLogedUserWishList,wishInfo}=useContext(WishlistContext)

  function dispalynav(){
  setisVisable(false)
  }

  useEffect(()=>{
    getCartInfo()
  },[])
 

  return<>

<nav className='bg-slate-100 fixed z-50 right-0 left-0'>
<div className='block  md:flex md:gap-4 xl-flex 2xl:flex justify-between items-center py-4 container'>
<div className='flex items-center justify-between '>
<h1 className='xl:mr-8 aling-center' >
    <Link to='' >
        <img src={freashcardImage} alt='' className='w-full'></img>
    </Link>
  </h1>
  <i className="fa-solid fa-bars  border-2 py-1 px-2 text-3xl border-black rounded-lg text-black cursor-pointer md:opacity-0 opacity-1 " onClick={toggleVisable}> </i>
</div>

  <div className={`navbar-menu ${isVisable ? 'block' : 'hidden'} md:flex justify-between items-center gap-2`}>

  {token?
  
  <div className='mr-20 md:flex justify-between items-center gap-10'>
<ul className='block md:flex gap-4  my-4 xl:my-0 '>
   
    <li className='mb-3'>
        <NavLink className={({isActive})=>{
          return `before:h-[2px]  before:bg-primary relative before:absolute before:left-0 before:-bottom-2 hover:before:w-full  before:transition-width before:duration-300
          hover:font-bold 
          ${isActive ? 'font-bold before:w-full' :""}`
        }}  to="" onClick={dispalynav}>Home</NavLink>
    </li>
    <li className='mb-3'>
        <NavLink className={({isActive})=>{
          return `before:h-[2px] before:bg-primary relative before:absolute before:left-0 before:-bottom-2 hover:before:w-full before:transition-[width]
          hover:font-bold before:duration-300
          ${isActive ? 'font-bold before:w-full' :""}`
        }} to="products" onClick={dispalynav}>Products</NavLink>
    </li>
    <li className='mb-3'>
        <NavLink className={({isActive})=>{
          return `before:h-[2px] before:bg-primary relative before:absolute before:left-0 before:-bottom-2 hover:before:w-full before:transition-[width] 
          hover:font-bold before:duration-300
          ${isActive ? 'font-bold before:w-full ' :""}`
        }} to="categorys" onClick={dispalynav}>Categories</NavLink>
    </li>
    <li className='mb-3'>
        <NavLink className={({isActive})=>{
          return `before:h-[2px]  before:bg-primary relative before:absolute before:left-0 before:-bottom-2 hover:before:w-full before:transition-[width]
          hover:font-bold before:duration-300
          ${isActive ? 'font-bold before:w-full ' :""}`
        }} to="prands" onClick={dispalynav}>Brands</NavLink>
    </li>
    <li>
        <NavLink className={({isActive})=>{
          return `before:h-[2px]  before:bg-primary relative before:absolute before:left-0 before:-bottom-2 hover:before:w-full before:transition-[width]
          hover:font-bold before:duration-300
          ${isActive ? 'font-bold before:w-full ' :""}`
        }} to="allOrders" onClick={dispalynav}>Orders</NavLink>
    </li>
</ul>
<div><Link to="cart" className='ml-auto text-xl relative mr-6'  onClick={dispalynav}>
    <i className="fa-solid fa-cart-shopping "></i>
    <span className='bg-primary absolute top-0 right-0 w-5 h-5 flex items-center justify-center rounded-full text-xs translate-x-1/2 -translate-y-1/2 font-bold text-white'>{cartInfo === null ? <i className="fa-solid fa-spinner fa-spin"></i>: cartInfo.numOfCartItems || 0 }</span>
</Link>
<Link to="wishlist" className='ml-auto text-xl relative '  onClick={dispalynav}>
<i className="fa-solid fa-heart"></i>
</Link></div>

</div> :""}

<div className='ml-0 xl:ml-6 md:ml-6  '>
  <ul className='flex  gap-4'>
   
    <li>
      <Link to='https://www.instagram.com'><i className="fa-brands fa-instagram"></i></Link>
    </li>
    <li>
      <Link><i className="fa-brands fa-facebook"></i></Link>
    </li>
     <li>
      <Link><i className="fa-brands fa-tiktok"></i></Link>
    </li> 
    <li>
      <Link><i className="fa-brands fa-twitter"></i></Link>
    </li>
    <li>
      <Link><i className="fa-brands fa-linkedin"></i></Link>
    </li> 
    <li>
      <Link><i className="fa-brands fa-youtube"></i></Link>
    </li>

  </ul>
</div>

{!token?<div className='ml-7'>
  <ul className='flex gap-3'>
    <li>
      <NavLink className={({isActive})=>{
        return `before:h-[2px] before:bg-primary relative before:absolute before:left-0 before:-bottom-2 hover:before:w-full before:transition-[width]
        hover:font-bold before:duration-300
        ${isActive ? 'font-bold before:w-full ' :""}`
      }} to='/auth/login' onClick={dispalynav}>Login</NavLink>
    </li>
    <li>
      <NavLink className={({isActive})=>{
        return `before:h-[2px] before:bg-primary relative before:absolute before:left-0 before:-bottom-2 hover:before:w-full before:transition-[width]
        hover:font-bold before:duration-300
        ${isActive ? 'font-bold before:w-full ' :""}`
      }} to='/auth/signup' onClick={dispalynav}>Sign up</NavLink> 
    </li>
  </ul>
</div>:""}

{token?<div className='mx-3' onClick={dispalynav}>
<i className="fa-solid fa-right-from-bracket cursor-pointer" onClick={logOut}></i>
</div>:""}
  </div>
</div>
</nav>

  
  </>
}
