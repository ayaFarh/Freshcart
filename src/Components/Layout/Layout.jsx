import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Offline, Online } from 'react-detect-offline'

export default function Layout() {
  return <> 
  <Navbar/>
  <Online>
  <div className='container pt-[80px] pb-[240px]'>
  <Outlet></Outlet>
  </div>
  </Online>
  <Offline>
  <div className='container pt-[80px] pb-[240px]'>
  <Outlet></Outlet>
  </div>
  <div className='pt-[80px] pb-[240px] fixed z-[999] top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-25 flex justify-center items-center'>
    <h2 className=' font-bold'>you are offline check your connection...</h2>
  </div>
  </Offline>
  <Footer/>
  </>
}
