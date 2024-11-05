import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/UserContext/cart.context'
import Loading from '../../Components/Loading/Loading'

export default function Cart() {
  const {cartInfo,removeItemsFromCart,upduteItemsCart,clearCart} = useContext(cartContext)
 
  return <>
  {cartInfo === null ? <Loading/> : <section>
    <div className='bg-slate-100 p-5 rounded mb-7'>
  <h2 className='font-bold text-2xl'>shop cart <i className="fa-solid fa-cart-shopping  "></i></h2>
{cartInfo.length === 0 ?  <div className='py-16 flex flex-col justify-center items-center'>
    <p className='mb-4 text-xl'>there are not items yet</p>
    <Link to="/" className='uppercase bg-primary btn-primary'>add your first product to cart</Link>
  </div> 
  :cartInfo.data.products.map((product)=>
  <section key={product._id}>
   <div className='grid grid-cols-12 gap-3 my-3'>
<div className='md:col-span-1 col-span-5'>
  <img src={product.product.imageCover} alt='' className='w-full'></img>
</div>
<div className='md:col-span-11 col-span-7'>
<div className='md:flex justify-between items-center'>
  <div>
<h3>{product.product.title}</h3>
<h4 className='text-primary my-1'>price:{product.price} L.E</h4>
<button className='btn-primary bg-red-600 uppercase mb-4' onClick={()=>{removeItemsFromCart({id:product.product.id})}}><i className="fa-solid fa-trash"></i>remove</button>
  </div>
  <div className='flex items-center gap-4'>
    <button onClick={()=>{upduteItemsCart({id:product.product.id,count:product.count - 1})}} className='border-2 rounded p-1 border-primary hover:bg-primary transition-all duration-30'><i className="fa-solid fa-minus"></i></button>
    <span className='font-bold'>{product.count}</span>
    <button onClick={()=>{upduteItemsCart({id:product.product.id,count:product.count + 1})}} className='border-2 rounded p-1 border-primary hover:bg-primary transition-all duration-30' ><i className="fa-solid fa-plus"></i></button>
  </div>
</div>
</div>
    </div>
  </section>
)}
<button onClick={clearCart} className='block ms-auto uppercase font-bold btn-primary bg-red-600'>clear cart</button>

</div>

 <div  className='flex justify-end'>
 <Link to='/checkout'  className=' uppercase bg-primary btn-primary'>next step <i className="fa-solid fa-chevron-right"></i></Link>
 </div>
  </section>}
  </>
}
