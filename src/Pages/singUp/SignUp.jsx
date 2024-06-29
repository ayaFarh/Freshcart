
import axios from 'axios'
import { useFormik} from 'formik'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'


export default function SignUp() {
    const [errorMsg,seterrorMsg] = useState(null)
    const navigate = useNavigate()

    const validationSchema = yup.object({
      name:yup.string().required('name is required').min(3,'min name mast be 3 letters').max(15,'max name mast be 15 letter'),
      email:yup.string().required('email is required').email("write avalid email"),
      phone:yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/,'phone number must be 11 number start with 01'),
      password:yup.string().required('password is required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'Minimum eight characters, at least one letter and one number'),
      rePassword:yup.string().required('repassword is required').oneOf([yup.ref("password")],"password and repassword mast be same")
    })
    
    
    
      async function sendDataTORegister(values){
        let id;
    
       try{
        const options = {
          url:'https://ecommerce.routemisr.com/api/v1/auth/signup',
          method:'POST',
          data:values
        }
    
        id = toast.loading("waiting...")
      const {data} = await axios.request(options)
      console.log(data)
      toast.dismiss(id)
      toast.success("user created successful")
    setTimeout(()=>{
        if(data.message === "success"){
          
            navigate("/auth/login")
         }
    },3000)


       }catch(error){
        toast.dismiss(id)
         console.log(error);
         seterrorMsg(error.response.data.message)
       }
      }
    
    
    const formik = useFormik({
      initialValues:{
        name: "",
        email: "",
        password: "",
        rePassword: "",
        phone: ""
      },
    
      validationSchema,
      onSubmit:sendDataTORegister
    })
    
    
    
      return <>
      <Helmet>
        <title>SignUp</title>
        <meta name="description" content="SignUp" />
      </Helmet>
      <section>
        <h2 className='text-primary text-2xl font-bold'>
          <i className="fa-regular fa-circle-user me-2"></i>
          <span>Regieser Now</span>
        </h2>
        <form className='mt-5 space-y-4' onSubmit={formik.handleSubmit}>
          <div>
          <input name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} type='text' placeholder='Username' className='form-control w-full'/> 
          {formik.errors.name && formik.touched.name ? (<div className='text-red-600 mt-1 font-semibold'>* {formik.errors.name}</div>):('')}
          </div>
           
          <div >
          <input name='email' onChange={formik.handleChange} value={formik.values.email}onBlur={formik.handleBlur} type='email' placeholder='Email' className='form-control w-full'/> 
          {formik.errors.email && formik.touched.email ? (<div className='text-red-600 mt-1 font-semibold'>* {formik.errors.email}</div>):('')}
          {errorMsg ?(<div className='text-red-600 mt-1 font-semibold'>* {errorMsg}</div>):('')}
          </div>
          <div>
          <input name='phone' onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} type='tel' placeholder='Phone number' className='form-control w-full'/> 
          {formik.errors.phone && formik.touched.phone ? (<div className='text-red-600 mt-1 font-semibold'>* {formik.errors.phone}</div>):('')}
          </div>
          <div>
          <input name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} type='password' placeholder='Password' className='form-control w-full'/> 
          {formik.errors.password && formik.touched.password ? (<div className='text-red-600 mt-1 font-semibold'>* {formik.errors.password}</div>):('')}
          </div>
          <div>
          <input name='rePassword' onChange={formik.handleChange} value={formik.values.rePassword} onBlur={formik.handleBlur} type='password' placeholder='Type your password again' className='form-control w-full'/> 
          {formik.errors.rePassword && formik.touched.rePassword ? (<div className='text-red-600 mt-1 font-semibold'>* {formik.errors.rePassword}</div>):('')}
          </div>
          <button type='submite' className='btn-primary uppercase'>
            Signup
          </button>
         
        </form>
      </section>
      
      
      
      </>

  }
