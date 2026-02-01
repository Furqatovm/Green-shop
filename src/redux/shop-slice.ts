import { createSlice } from "@reduxjs/toolkit";
import type {  ShopCardType } from "../@types/@type";
import toast from "react-hot-toast";

interface InitialStateType {
    data:ShopCardType[],
    coupon:number
}

const initialState:InitialStateType ={
    data:JSON.parse(localStorage.getItem("shop") as string) || [],
    coupon:0,
}

const shopSlice =createSlice({
    name:"shop-slice",
    initialState,
    reducers:{
        getData (state, {payload}){

            if(state.data.find((val) =>val._id ===payload._id)){
               state.data= state.data.map((value) =>{
                    if(value._id === payload._id){
                        return{
                            ...value,
                            counter:value.counter +=1,
                            userPrice:(value.counter *value.price)
                        }
                    }
                    return value
                })
            localStorage.setItem("shop", JSON.stringify(state.data))
            return 
            }

            state.data = [...state.data, {...payload, counter:1, userPrice:payload.price}]
            toast.success("Product successfully added")
            localStorage.setItem("shop", JSON.stringify(state.data))
        },

        deleteData(state, {payload}){
            state.data =state.data.filter((val) =>val._id !== payload);
            localStorage.setItem("shop", JSON.stringify(state.data))
            toast.error("Element is removed")
        },

        incrementNumber (state, {payload}){
            state.data =state.data.map((val) =>{
                if(val._id === payload){
                    return {
                        ...val,
                        counter: val.counter+=1,
                        userPrice:val.price*val.counter
                    }
                }
                return val
            });
            localStorage.setItem("shop", JSON.stringify(state.data))
        },

        decrement (state, {payload}){
            state.data =state.data.map(val => {
                if(val._id === payload){
                    return {
                        ...val,
                        counter: val.counter ==1 ? val.counter: val.counter -=1,
                        userPrice:val.price*val.counter
                    }
                }
                return val
            })
        },

        getCoupon(state, {payload}){
            state.coupon =payload
        },
        clearLocalStorage(state) {
            localStorage.clear();
            state.data=[]
        }
    }
})

export const {getData, deleteData, incrementNumber, decrement, getCoupon, clearLocalStorage } =shopSlice.actions;
export default shopSlice.reducer