import { createContext, useState } from "react";

export const UserContext = createContext("")

 

export default function UserProvider({children}){
    const[token,settoken]= useState(localStorage.getItem("token"))
    function logOut(){
        settoken(null)
        localStorage.removeItem("token")
    }


    return <UserContext.Provider value={{token,settoken,logOut}}>
       {children}
    </UserContext.Provider>


}

