import { useMutation } from "@tanstack/react-query"
import { useAxios } from "../../useAxios/axios"
import toast from "react-hot-toast";


export  const useLoginMutation =() =>{
    const axios =useAxios();
    return useMutation({
        mutationKey:["login"],
        mutationFn:(data:object) =>axios({url:"user/sign-in", method:"POST", body:data}),
        onSuccess:(data) =>{
            console.log(data);
            if(data.message ==="success"){
                toast.success("Login muvaffaqiyatli bo'ldi");
            } else{
                toast.error("Login muvaffaqiyatsiz bo'ldi");
            }
           
        }
    })
}


export const useRegisterMutation =() =>{
    const axios =useAxios();

    return useMutation({
        mutationKey:["register"],
        mutationFn:(data2:object) =>axios({url:"user/sign-up", method:"POST", body:data2 }),
        onSuccess:(data2) =>{
            console.log(data2)
            if(data2.message ==="success"){
                toast.success("Login muvaffaqiyatli bo'ldi");
                
            } else{
                toast.error("Login muvaffaqiyatsiz bo'ldi");
            }
        },
        onError:(error) =>console.log(error)
    })
}