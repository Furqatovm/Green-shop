import { createSlice } from "@reduxjs/toolkit";

import Cookies from "js-cookie";

interface User {
    _id: string;
    name: string;
    surname: string;
    email: string;
    username: string;
    profile_photo?: string;
  }
  
  interface InitialStateType {
    user: User | null;
    token: string | null;
  }
  
  const initialState: InitialStateType = {
    user: Cookies.get("user") ? JSON.parse(Cookies.get("user") as string) : null, 
    token: Cookies.get("token") || null,
  };
  
const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser: (state, { payload }: { payload: User }) => {
            state.user = payload;
            Cookies.set("user", JSON.stringify(payload) as string) 
          },          
        setToken:(state, {payload}) =>{
            state.token =payload;
            Cookies.set("token", payload); 
        },
        setLogout:(state) =>{
            state.token =null;
            state.user =null;
            Cookies.remove("user");
            Cookies.remove("token");
        }
    }
})


export const {setUser, setToken, setLogout} =authSlice.actions

export default authSlice.reducer