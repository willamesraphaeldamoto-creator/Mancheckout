import React,{createContext,useContext,useEffect,useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {getAuthInstance} from './firebase';
const Ctx=createContext({user:null,ready:false});
export const useAuth=()=>useContext(Ctx);
export function AuthProvider({children}){
 const[user,setUser]=useState(null),[ready,setReady]=useState(false);
 useEffect(()=>{
  try{
   const auth=getAuthInstance();
   return onAuthStateChanged(auth,u=>{setUser(u);setReady(true)},()=>{setUser(null);setReady(true)});
  }catch(e){setUser(null);setReady(true);}
 },[]);
 return <Ctx.Provider value={{user,ready}}>{children}</Ctx.Provider>
}