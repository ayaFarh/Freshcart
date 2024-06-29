import React from 'react'
import paypalImage from '../../assets/images/paypal.png'
import masterCardImage from '../../assets/images/mastercard.webp'
import ameracanImage from '../../assets/images/American-Express-Color.png'
import AmazonImage from '../../assets/images/amazon-pay.png'
import AppSroreImage from '../../assets/images/get-apple-store.png'
import GoglePlayImage from '../../assets/images/get-google-play.png'

export default function Footer() {
  return <>
<footer className='bg-slate-100 py-4 absolute left-0 right-0 top-full'>
 <div className='container'>
 <h2 className='my-2 text-xl font-bold'>Get The FreashCart App </h2>
  <p className='my-2'>We will Sent you link open it in your phone to download the App</p>
  <div className='grid grid-cols-12 gap-2'>
    <div className='col-span-12 sm:col-span-8  md:col-span-8 lg:col-span-9 xl:col-span-10'>
    <input className='form-control flex-grow w-full h-full ' type='email' name='email' placeholder='Email ..'></input>
    </div>
   <div className='col-span-12 sm:col-span-4  md:col-span-4 lg:col-span-3 xl:col-span-2'>
   <button className='uppercase btn-primary w-50'>share app link</button>
   </div>
  </div>

<div className='flex mt-5 flex-wrap  md:flex-wrap xl:flex-nowrap justify-between items-center border-gray-200 border-t-2 border-b-2 py-4 mb-10 '>
<div className='flex gap-3 flex-wrap  md:flex-wrap xl:flex-nowrap justify-center items-center w-70'>
  <p className='text-xl'>Payment partner</p>
<img src={masterCardImage} alt='' className='w-16'></img>
<img src={AmazonImage} alt='' className='w-16'></img>
<img src={ameracanImage} alt='' className='w-16'></img>
<img src={paypalImage} alt='' className='w-16'></img>
</div>
<div className='flex justify-center items-center w-50'>
  <p className='px-3'>Get deliveries With FreashCart </p>
  <img src={AppSroreImage} alt='' className='w-20'></img>
<img src={GoglePlayImage} alt='' className='w-20'></img>
</div>
</div>
 </div>
</footer>


  </>
}
