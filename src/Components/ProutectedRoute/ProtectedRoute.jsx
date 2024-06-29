import React, { Children, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext/User.Context';


export default function ProtectedRoute({children}) {
  const{token} = useContext(UserContext);

    if(token){
        return children
    }else{
        return <Navigate to="auth/login"/>
    }
  return 
  <>
  
  
  </>
}
