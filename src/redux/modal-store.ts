import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    authorizationModalVisibility: boolean;

}

const initialState:initialStateType ={
    authorizationModalVisibility:false,
}
export const modalSlice =createSlice({
    name:"modal-slicer",
    initialState,
    reducers:{
        setauthorizationModalVisibility(state){
            state.authorizationModalVisibility =!state.authorizationModalVisibility
        }
    }
})


export const {setauthorizationModalVisibility} =modalSlice.actions

export default modalSlice.reducer