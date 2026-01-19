import {    Modal } from "antd"
import { useReduxDispatch, useReduxSelector } from "../../../hook/useRedux/useredux"
import { setauthorizationModalVisibility } from "../../../redux/modal-store"
import { useState } from "react";
import Login from "./login";
import Register from "./register";

const AuthorizationModal = () => {
    const dispatch =useReduxDispatch();
    const [state, setState] =useState<string>("login")



    const {authorizationModalVisibility} =useReduxSelector(state=> state.modalSlice)
  return (
    <Modal open={authorizationModalVisibility} centered footer={false}  onCancel={() =>dispatch(setauthorizationModalVisibility())}>
       <div className="w-[75%] m-auto my-auto">
        <div className="flex gap-5 items-center justify-center mb-8"> 
            <span onClick={() =>setState("login")} className={`text-[20px] font-medium  cursor-pointer ${state ==="login" ? "text-logoColor" :"text-linkColor"} font-medium`}>Login</span>
            <div className="w-px h-4 bg-linkColor"></div>
            <span onClick={() =>setState("register")}  className={`text-[20px] cursor-pointer text-linkColor font-medium ${state ==="register" ? "text-logoColor" :"text-linkColor"}`}>Register</span>
        </div>
        {state === "login" ? <Login />: <Register />}
        
       </div>
    
    </Modal>
  )
}

export default AuthorizationModal