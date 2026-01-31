import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAxios } from "../../useAxios/axios"
import toast from "react-hot-toast";
import { useReduxDispatch } from "../../useRedux/useredux";
import { setauthorizationModalVisibility } from "../../../redux/modal-store";
import Cookies from "js-cookie";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { getCoupon } from "../../../redux/shop-slice";
import { setBlogAuthModal } from "../../../redux/blog-modal-slice";
import { useDispatch } from "react-redux";




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



export const useIncreaseView  =() =>{
    const axios =useAxios();

    return useMutation({
        mutationKey:["increment-view"],
        mutationFn:({postId}: {postId: string}) =>axios({
            url:`user/blog/view`,
            method:"PUT",
            body:{_id: postId}
        }),
        onSuccess:(data) =>{
            console.log(data)
        },
        onError:(error) =>{
            console.log(error)
        }
    })
}


export const useCreateBlog =() =>{
    const dispatch =useReduxDispatch()
    const axios =useAxios();
    const queryClient =useQueryClient()
    return useMutation({
        mutationKey:["add-blog"],
        mutationFn:(data:{title:string, content:string}) =>
            axios({
                url:"user/blog",
                method:"POST",
                body:data
            }),

            onSuccess:(data) =>{
                console.log(data);
                dispatch(setBlogAuthModal())
                toast.success("data is added")
                queryClient.invalidateQueries({ queryKey: ['blogs'] });
            },
            onError:(error) =>{
                console.log(error)
                toast.error("xatolik yuz berdi")
            }
    })
}


export const useDeleteBLog =() =>{
    const dispatch =useReduxDispatch()
    const axios =useAxios();
    const queryClient =useQueryClient()
    return useMutation({
        mutationKey:["delete-blog"],
        mutationFn:(_id:string) =>
            axios({
                url:"user/blog",
                method:"DELETE",
                body:{
                    _id,
                }
            }),

            onSuccess:(data) =>{
                console.log(data);
                dispatch(setBlogAuthModal())
                toast.success("data is added")
                queryClient.invalidateQueries({ queryKey: ['blogs'] });
            },
            onError:(error) =>{
                console.log(error)
                toast.error("xatolik yuz berdi")
            }
    })
}





export const useChangeAccountDetails =() =>{
    const dispatch =useDispatch()
    const axios =useAxios();
    const queryClient =useQueryClient()
    return useMutation({
        mutationKey:["change-account-details"],
        mutationFn:({...data}:{_id:string; name:string; surname:string; email:string; phone_number:string; username:string}) =>
            axios({
                url:"user/account-details",
                method:"POST",
                body:{
                    ...data
                }
            }),

            onSuccess:(data) =>{
                console.log(data);
                toast.success("data is added")
                Cookies.remove("user");
                Cookies.remove("token");
                dispatch(setauthorizationModalVisibility())
                queryClient.invalidateQueries({ queryKey: ['change-account-details'] });
            },
            onError:(error) =>{
                console.log(error)
                toast.error("xatolik yuz berdi")
            }
    })
}