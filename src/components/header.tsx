import { Link, useLocation } from "react-router-dom"
import Logo from "../assets/logo"
import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { useReduxDispatch } from "../hook/useRedux/useredux";
import { setauthorizationModalVisibility } from "../redux/modal-store";
import Cookies from "js-cookie"
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";





const Header = () => {
    const {pathname} =useLocation();
    const dispatch =useReduxDispatch();
    
    const [userInfo, setUserInfo] = useState<any>(null);

    useEffect(() => {
      const user = Cookies.get("user");
      if (user) setUserInfo(JSON.parse(user));
    }, []); // component mount bo‘lganda ishlaydi
   

  return (
    <div className="">
        <header className="w-[90%] border-b border-[#46A35880]  py-3  px-2 m-auto flex justify-between items-center">
        <Link to={"/"}>
            <Logo />
        </Link>

        <nav className="flex gap-10 items-center  max-md:hidden">
            <Link to={"/"} className={`${pathname ==="/" &&"text-logoColor"} font-medium`}>Home</Link>
            <Link to={"/"} className={`text-linkColor font-medium`}>Shop</Link>
            <Link to={"/"} className={`text-linkColor font-medium`}>Plant</Link>
            <Link to={"/"} className={`text-linkColor font-medium`}>Blo</Link>
        </nav>
        
        <div className="flex gap-7 items-center text-[20px]">
            <FiSearch />
            <GrNotification />
            <span className="relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1558 20.25H9.89066C6.78905 20.25 4.26569 17.7267 4.26569 14.6251V8.85947C4.26569 5.9762 2.82861 3.30739 0.421544 1.72031C-0.0107343 1.43531 -0.130077 0.853876 0.154921 0.421598C0.439919 -0.0107278 1.02131 -0.130118 1.45368 0.154974C2.82776 1.06097 3.94254 2.2559 4.73969 3.63167C4.91195 3.82466 6.30104 5.29699 8.57821 5.29699H19.3738C22.3191 5.24191 24.6245 8.19769 23.8544 11.0406L22.6117 15.9939C21.9829 18.4998 19.7394 20.25 17.1558 20.25ZM5.90415 6.64234C6.06001 7.36238 6.14068 8.10483 6.14068 8.85947V14.6251C6.14068 16.6928 7.82292 18.375 9.89066 18.375H17.1558C18.8782 18.375 20.3739 17.2082 20.793 15.5376L22.0358 10.5844C22.4933 8.89509 21.1233 7.13931 19.3738 7.17198H8.57817C7.54828 7.17198 6.65185 6.94993 5.90415 6.64234ZM9.42191 22.8281C9.42191 22.1809 8.89724 21.6563 8.25004 21.6563C6.69511 21.7182 6.69647 23.9387 8.25004 24C8.89724 24 9.42191 23.4753 9.42191 22.8281ZM18.75 22.8281C18.75 22.1809 18.2253 21.6563 17.5781 21.6563C16.0232 21.7182 16.0245 23.9387 17.5781 24C18.2253 24 18.75 23.4753 18.75 22.8281ZM20.3113 9.98446C20.3113 9.46668 19.8916 9.04697 19.3738 9.04697H8.95316C7.7093 9.09647 7.71023 10.8729 8.95316 10.922H19.3738C19.8916 10.922 20.3113 10.5022 20.3113 9.98446Z" fill="#3D3D3D"/>
                </svg>

                <span className="text-[8px] text-white bg-logoColor p-0.2 w-3 h-3 rounded-full absolute top-0 -right-1 text-center">6</span>
            </span>

           {userInfo ? <Link to={"/profile"} className="cursor-pointer text-[26px]">
            <CgProfile />
           </Link> :
            <button onClick={() => dispatch(setauthorizationModalVisibility())} className="bg-logoColor text-white text-[1rem] flex gap-2 py-1.5 px-4 hover:opacity-90 rounded-md cursor-pointer items-center font-medium">
            <span className="text-[20px] text-white">
               <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1592 10.1006H8.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
<path d="M15.7203 7.67053L18.1603 10.1005L15.7203 12.5305" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
<path d="M13.6332 6.35823C13.3582 3.3749 12.2415 2.29156 7.79985 2.29156C1.88234 2.29156 1.88234 4.21656 1.88234 9.9999C1.88234 15.7832 1.88234 17.7082 7.79985 17.7082C12.2415 17.7082 13.3582 16.6249 13.6332 13.6416" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

            </span>
            Login
    </button>
           }
        </div>
        </header>
    </div>
  )
}

export default Header