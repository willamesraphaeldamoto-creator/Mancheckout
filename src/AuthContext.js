import React,{createContext,useContext,useState} from 'react';
const Ctx=createContext({user:null,ready:true,setUser:()=>{},clearUser:()=>{}});
export const useAuth=()=>useContext(Ctx);
export function AuthProvider({children}){
 const[user,setUser]=useState(null);
 const clearUser=()=>setUser(null);
 return <Ctx.Provider value={{user,ready:true,setUser,clearUser}}>{children}</Ctx.Provider>
}