import React,{createContext,useContext,useEffect,useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebase';
const Ctx=createContext({user:null,ready:false});
export const useAuth=()=>useContext(Ctx);
export function AuthProvider({children}){const[user,setUser]=useState(null),[ready,setReady]=useState(false);useEffect(()=>onAuthStateChanged(auth,u=>{setUser(u);setReady(true)}),[]);return <Ctx.Provider value={{user,ready}}>{children}</Ctx.Provider>}
