import axios from 'axios'
import { useFormik} from 'formik'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { UserContext } from '../../Context/UserContext/User.Context'
import { Helmet } from 'react-helmet'

export default function Login() {
  const {token,settoken} = useContext(UserContext)

  const [errorMsg,seterrorMsg]= useState(null)
  let navigate = useNavigate()
 const validationSchema = yup.object({
  email:yup.string().required('email is required').email("write avalid email"),
  password:yup.string().required('password is required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'Minimum eight characters, at least one letter and one number'),
 })
async function sendDataregastir(values){
  let id;
  try {
    let options = {
      url:'https://ecommerce.routemisr.com/api/v1/auth/signin',
      method:'POST',
      data:values
    }
  
   id= toast.loading("waiting...")
  
  const {data} = await axios.request(options)
  toast.dismiss(id)
  toast.success("user login successful")
  settoken(data.token)
  localStorage.setItem("token",data.token)
  navigate("/")
  } catch (error) {
    toast.dismiss(id)
         console.log(error);
         seterrorMsg(error.response.data.message)
  }
}


const formik = useFormik({
  initialValues:{
    email:"",
    password:"",
  },
  validationSchema,
  onSubmit:sendDataregastir,
})


  return <>
   <Helmet>
    <title>Login</title>
    <meta name="description" content="Login" />
  </Helmet>
  <section>
  <h2 className='font-bold mb-2 text-2xl text-primary mb-4'>
    Login Now
  </h2>
  <form className='space-y-3' onSubmit={formik.handleSubmit}>
    <div>
      <input type='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' placeholder='Enter your email' className='form-control w-full'/>
      {formik.errors.email && formik.touched.email ? (<div className='text-red-600 mt-1 font-semibold'>* {formik.errors.password}</div>):('')}
    </div>
    <div>
      <input type='password'value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' placeholder='Enter your Password' className='form-control w-full'/>
      {formik.errors.password && formik.touched.password ? (<div className='text-red-600 mt-1 font-semibold'>* {formik.errors.password}</div>):('')}
    </div>
    {errorMsg ?(<div className='text-red-600 mt-1 font-semibold'>* {errorMsg}</div>):('')}
    <div className='flex justify-between'>
      <Link to={'/auth/forgotpassword'} className='text-primary'>Forgot your password?</Link>
    <button type='submite' className='btn-primary'>Login</button>
    </div>
  </form>


  </section>
  </>
  
}
