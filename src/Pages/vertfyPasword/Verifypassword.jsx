import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet';

export default function Verifypassword() {
    const [resetCode,setresetCode] = useState("")
const handelresetCode = async function verifyCode(e){
    e.preventDefault();
    let code = e.target.code.value;
    let options = {
      url: 'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
      method: 'POST',
      data: { resetCode },
    }  

    let { data}= await axios.request(options)
    toast.success('Verification code success.')
    console.log(data);
}

        
    

  return <>
  <Helmet>
    <title>Verifypassword</title>
    <meta name="description" content="Verifypassword" />
  </Helmet>
 <form className='flex flex-col gap-3 items-center justify-center mt-10' >
    <input name='code' type='text' placeholder="Enter your code" value={resetCode} onChange={(e)=>setresetCode(e.target.value)} className='form-control '/>
    <button type='submite' className='w-fit btn-primary uppercase'>
      ok </button>
  </form>

  </>
}
