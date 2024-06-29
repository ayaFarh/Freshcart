import React from 'react'
import notFoundImage from '../../assets/images/error.svg'
import { Helmet } from 'react-helmet'

export default function NotFound() {
  return <>
   <Helmet>
    <title>Not found</title>
    <meta name="description" content="Home" />
  </Helmet>
 <div className='flex items-center justify-center py-20'>
 <img src={notFoundImage} className='' alt=''/>
 </div>
  </>
   
}

