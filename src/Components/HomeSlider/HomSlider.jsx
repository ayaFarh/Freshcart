import React from 'react'
import image1 from '../../assets/images/slider-image-1.jpeg'
import image2 from '../../assets/images/slider-image-2.jpeg'
import image3 from '../../assets/images/slider-image-3.jpeg'


export default function HomSlider() {
  return <>
<div className='grid grid-cols-12 mb-3'>

<div className='col-span-7 md:col-span-8 xl:col-span-8'>
<swiper-container style={{height:"100%"}}  loop={true} >
  <swiper-slide style={{height:"100%"}}><img className='w-full h-full object-cover' src={image3} alt=''></img></swiper-slide>
  <swiper-slide style={{height:"100%"}}><img className='w-full h-full object-cover' src={image2} alt=''></img></swiper-slide>
  <swiper-slide style={{height:"100%"}}><img className='w-full h-full object-cover' src={image1} alt=''></img></swiper-slide>
</swiper-container>

</div>
<div className='col-span-5 md:col-span-4 xl:col-span-4 bg-red-300 h-full'>
<div className='h-1/2'><img className='w-full h-full object-cover' src={image2} alt=''></img></div>
<div className='h-1/2'><img className='w-full h-full object-cover' src={image3} alt=''></img></div>

</div>





</div>
  </>
}
