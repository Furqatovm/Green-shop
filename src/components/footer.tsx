import { Button, Form, Input, Space } from "antd"
import Footerimg1 from "../assets/images/footerimg1.png"
import { ButtonStyle, inputStyle } from "../@types/@type"
import Logo from "../assets/logo"

import Facebook from "../assets/icons/Facebook.png"
import Instagram from "../assets/icons/Instagram.png"
import Linkedin from "../assets/icons/Linkedin.png"
import Twitter from "../assets/icons/Twitter.png"
import Union from "../assets/icons/Union.png"

import Payment from "../assets/images/payment.png"
import { useOnSubscribe } from "../hook/useQuery/useQueryAction"



const Footer = () => {

    const {mutate:setEmail} =useOnSubscribe()
  return (
   <div>
     <footer className="bg-[#FBFBFB] w-[90%] mx-auto mt-30">
        <div className="p-4  flex justify-between items-center px-4">
            <div className="w-[65%] flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <div>
                    <img src={Footerimg1} className="" alt="" />
                    </div>
                    <h5 className="text-linkColor text-[17px] font-bold">Garden Care</h5>
                    <p className="text-blog-text-children text-blogText  leading-5.5 w-50">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className="w-0.5 h-40 mr-6 bg-[#46A3581A]"></div>

                <div className="flex flex-col gap-2">
                    <div>
                    <img src={Footerimg1} className="" alt="" />
                    </div>
                    <h5 className="text-linkColor text-[17px] font-bold">Garden Care</h5>
                    <p className="text-blog-text-children text-blogText  leading-5.5 w-50">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className="w-0.5 h-40  mr-6 bg-[#46A3581A]"></div>



                <div className="flex flex-col gap-2">
                    <div>
                    <img src={Footerimg1} className="" alt="" />
                    </div>
                    <h5 className="text-linkColor text-[17px] font-bold">Garden Care</h5>
                    <p className="text-blog-text-children text-blogText  leading-5.5 w-50">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>

            </div>
            <div className="w-[28%] flex flex-col gap-4">
                <h4 className="text-linkColor text-filterText font-bold">Would you like to join newsletters?</h4>
                <Form onFinish={(email) =>setEmail(email)}>
                    <Form.Item name={"email"}>
                    <Space.Compact style={{ width: '100%' }}>
      <Input style={inputStyle} placeholder="Enter your email" />
      <Button htmlType="submit" style={ButtonStyle} type="primary">Submit</Button>
    </Space.Compact>
                    </Form.Item>
                </Form>
            <p className="text-blogText text-blog-text-children">
            We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! 
            </p>
            </div>
        </div>

        <div className="grid grid-cols-4 justify-between gap-10 bg-[#edf6ef] p-6">
            <div>
                <Logo />
            </div>
            <div className="flex  items-center gap-3">
           <svg width={30} height={30} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M12.0918 8.92531C12.0918 7.77425 11.1591 6.84155 10.0081 6.84155C8.85787 6.84155 7.92517 7.77425 7.92517 8.92531C7.92517 10.0755 8.85787 11.0082 10.0081 11.0082C11.1591 11.0082 12.0918 10.0755 12.0918 8.92531Z" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path fillRule="evenodd" clipRule="evenodd" d="M9.99959 17.5C7.58457 17.5 3.75 13.2989 3.75 8.8322C3.75 5.33539 6.54758 2.5 9.99959 2.5C13.4516 2.5 16.25 5.33539 16.25 8.8322C16.25 13.2989 12.4154 17.5 9.99959 17.5Z" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

                <p className="text-linkColor text-blog-text-children">
                70 West Buckingham Ave.
                Farmingdale, NY 11735
                </p>
            </div>


            <div className="flex gap-3 items-center">

           <svg width={30} height={30} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.6208 7.51587C14.6208 7.51587 11.9457 10.7264 9.98919 10.7264C8.03347 10.7264 5.32837 7.51587 5.32837 7.51587" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path fillRule="evenodd" clipRule="evenodd" d="M2.0434 9.97404C2.0434 4.27562 4.02753 2.37671 9.97991 2.37671C15.9323 2.37671 17.9164 4.27562 17.9164 9.97404C17.9164 15.6716 15.9323 17.5714 9.97991 17.5714C4.02753 17.5714 2.0434 15.6716 2.0434 9.97404Z" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>


                <p className="text-linkColor text-blog-text-children">
                contact@greenshop.com
                </p>
            </div>



            <div className="flex gap-3 items-center">

           <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.9604 2.29175C15.0446 2.63425 17.4813 5.06758 17.8279 8.15175" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M11.9604 5.24414C13.4363 5.53081 14.5896 6.68497 14.8771 8.16081" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path fillRule="evenodd" clipRule="evenodd" d="M6.41708 13.5825C0.668758 7.83352 1.48616 5.20096 2.09213 4.35263C2.16997 4.21552 4.08873 1.34323 6.1455 3.02839C11.2507 7.23288 4.78759 6.63843 9.0745 10.9261C13.3623 15.2128 12.7669 8.74996 16.9716 13.8541C18.6568 15.9117 15.7844 17.8303 15.6482 17.9073C14.7998 18.5141 12.1663 19.3315 6.41708 13.5825Z" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>



                <p className="text-linkColor text-blog-text-children">
                contact@greenshop.com
                </p>
            </div>



        </div>




        <div className="grid grid-cols-4 p-5 pt-8 border-b border-[#46A35833] mb-5">
            <div className="flex flex-col gap-2">
                <span className="text-linkColor text-filterChildren font-bold">My Account</span>
                <span className="text-linkColor text-blog-text-children block">My Account</span>
                <span className="text-linkColor text-blog-text-children block">Our stores</span>
                <span className="text-linkColor text-blog-text-children block">Contact us</span>
                <span className="text-linkColor text-blog-text-children block">Career</span>
                <span className="text-linkColor text-blog-text-children block">Specials</span>
            </div>


            <div className="flex flex-col gap-2">
                <span className="text-linkColor text-filterChildren font-bold">Help & Guide</span>
                <span className="text-linkColor text-blog-text-children block">Help Center</span>
                <span className="text-linkColor text-blog-text-children block">How to Buy</span>
                <span className="text-linkColor text-blog-text-children block">Shipping & Delivery</span>
                <span className="text-linkColor text-blog-text-children block">Product Policy</span>
                <span className="text-linkColor text-blog-text-children block">How to Return</span>
            </div>


            <div className="flex flex-col gap-2">
                <span className="text-linkColor text-filterChildren font-bold">Categories</span>
                <span className="text-linkColor text-blog-text-children block">House Plants</span>
                <span className="text-linkColor text-blog-text-children block">Potter Plants</span>
                <span className="text-linkColor text-blog-text-children block">Seeds</span>
                <span className="text-linkColor text-blog-text-children block">Small Plants</span>
                <span className="text-linkColor text-blog-text-children block">Accessories</span>
            </div>

            <div className="w-[70%] flex flex-col gap-2">
            <span className="text-linkColor text-filterChildren font-bold">My Account</span>
                <div className="grid grid-cols-5 gap-2">
                    <button className="p-2 flex items-center justify-center bg-transparent border border-[#46A35833] rounded-sm">
                        <img src={Facebook} alt="facebook icon" />
                    </button>
                    <button className="p-2 flex items-center justify-center bg-transparent border border-[#46A35833] rounded-sm">
                        <img src={Instagram} alt="facebook icon" />
                    </button>
                    <button className="p-2 flex items-center justify-center bg-transparent border border-[#46A35833] rounded-sm">
                        <img src={Twitter} alt="facebook icon" />
                    </button>
                    <button className="p-2 flex items-center justify-center  bg-transparent border border-[#46A35833] rounded-sm">
                        <img src={Linkedin} alt="facebook icon" />
                    </button>
                    <button className="p-2 flex items-center justify-center  bg-transparent border border-[#46A35833] rounded-sm">
                        <img src={Union} alt="facebook icon" />
                    </button>
                </div>

            <span className="text-linkColor text-filterChildren font-bold mt-4">My Account</span>
                <div>
                    <img src={Payment} alt="" />
                </div>
            </div>
            

        </div>

    </footer>
    <div className="bg-white text-center block mb-5">
       <span className="text-center">
        © 2021 GreenShop. All Rights Reserved.
        </span>
       </div>
   </div>
    
  )
}

export default Footer