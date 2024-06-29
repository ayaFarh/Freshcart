import axios from 'axios'
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navegate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let options = {
        url: 'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
        method: 'POST',
        data: { email },
      };
      let { data } = await axios.request(options);
     toast.success('Verification code sent to your email.')
    
      console.log(data);
     navegate("/auth/verifypassword")

    } catch (error) {
      toast.error('Verification code error')
      console.error(error);
    }
  };

  return (
    <>
      <h1 className='text-2xl font-bold font-cairo mb-4 mt-4'>Please enter your verification code</h1>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <input
          className='form-control p-3'
          type="email"
          name='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Link to={'/auth/verifypassword'} className='btn-primary bg-white text-primary border-primary border-2 block hover:bg-primary hover:text-white transition-all duration-300 w-fit' type='submit'>
          Verify
        </Link>
      </form>
    </>
  );
}


