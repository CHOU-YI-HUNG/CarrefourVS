import { createContext } from "react";

type GlobalContent = {
    authState: {
      username:string,
      id:number,
      status:boolean
    }
    
    setAuthState:(c: {
      username:string,
      id:number,
      status:boolean
    }) => void
    setSwitchNavbar:(c:boolean)=>void
  }
export const AuthContext=createContext<GlobalContent>({authState:{
  username:"",
  id:0,
  status:false
},setAuthState: () => {},setSwitchNavbar: () => {}})