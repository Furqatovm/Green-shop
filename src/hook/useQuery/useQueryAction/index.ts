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