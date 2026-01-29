import { useMutation } from "@tanstack/react-query"
import { useAxios } from "../../useAxios/axios"
import toast from "react-hot-toast";
import { useReduxDispatch } from "../../useRedux/useredux";
import { setauthorizationModalVisibility } from "../../../redux/modal-store";
import Cookies from "js-cookie";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { getCoupon } from "../../../redux/shop-slice";



export  const useLoginMutation =() =>{
    const dispatch =useReduxDispatch();
    const axios =useAxios();
    return useMutation({
        mutationKey:[`login`],
        mutationFn:(data:object) =>axios({url:"user/sign-in", method:"POST", body:data}),
        onSuccess:(data) =>{
            console.log(data);
            if(data.message ==="success"){
                toast.success("Login muvaffaqiyatli bo'ldi");
                dispatch(setauthorizationModalVisibility());
                Cookies.set("user", JSON.stringify(data.data.user))
                Cookies.set("token", data.data.token)
                
            } else{
                toast.error("Login muvaffaqiyatsiz bo'ldi");
            }
           
        }
    })
}


export const useRegisterMutation =() =>{
    const dispatch =useReduxDispatch();

    const axios =useAxios();

    return useMutation({
        mutationKey:["register"],
        mutationFn:(data2:object) =>axios({url:"user/sign-up", method:"POST", body:data2 }),
        onSuccess:(data2) =>{
            console.log(data2)
            if(data2.message ==="success"){
                toast.success("Login muvaffaqiyatli bo'ldi");
                dispatch(setauthorizationModalVisibility())
                
            } else{
                toast.error("Login muvaffaqiyatsiz bo'ldi");
            }
        },
        onError:(error) =>console.log(error)
    })
}


export const useLoginWithGoogle =() =>{
   const dispatch =useReduxDispatch();
   const axios =useAxios();

   return useMutation({
    mutationKey:["login-with-google"],
    mutationFn:async () =>{
        const provider =new GoogleAuthProvider();
        const res =await signInWithPopup(auth, provider);
        const email = res.user.email; 

        if(!email){
            throw new Error("Ma'lumot topilmadi")
        }


        return axios ({
            url:"user/sign-in/google",
            method:"POST",
            body:{email}
        })

    },
    onSuccess:(data) =>{
        console.log(data);
        if(data?.message ==="success"){
            toast.success("Login muvaffaqiyatli bo'ldi");
            dispatch(setauthorizationModalVisibility());
            Cookies.set("user", JSON.stringify(data.data.user))
            Cookies.set("token", data.data.token)
            
        } else{
            toast.error("Login muvaffaqiyatsiz bo'ldi");
        }
       
    },
    onError:(error) =>{
        throw error
    }
   })

}

export const useGetCoupon =() =>{
    const dispatch =useReduxDispatch()
    const axios =useAxios()
   return useMutation({
    mutationKey:["coupon"],
    mutationFn:({coupon_code}:{coupon_code:string})=>axios({url:"features/coupon", param:{coupon_code}}),
    onSuccess(data){
        console.log(data)
        dispatch(getCoupon(data?.data.discount_for));
        toast.success("Chegirma qabul qilindi")
    },
    onError(error){
       console.log(error)
       toast.error("Coupon is not accepted")
    }
   })
}