import { Button, Empty, Input, Spin } from "antd";
import People from "../../assets/images/people.png";
import { ButtonStyle, type BlogPost } from "../../@types/@type";
import BlogChild from "./blogChild";
import { useQueryHandler } from "../../hook/useQuery/usequery";
import { PlusOutlined } from '@ant-design/icons';

import Cookies from "js-cookie";
import { useReduxDispatch } from "../../hook/useRedux/useredux";
import { setauthorizationModalVisibility } from "../../redux/modal-store";
import { useState } from "react";
import { setBlogAuthModal } from "../../redux/blog-modal-slice";
const user =Cookies.get("user");

const { Search } = Input;

const Blog = () => {
  const [searchValue, setSearchValue] =useState<string>("")
  const dispatch  =useReduxDispatch()
  const {data, isLoading} =useQueryHandler({
    url:"user/blog",
    pathname:`blog-${searchValue}`,
    param:{
      search: `${searchValue}`
    }
  })
  const blogData =data?.data
  console.log(searchValue)
  return (
    <div className="px-2">
      <div className="bg-[#f5f5f5] p-4 rounded-2xl my-5">
      <img src={People} className="h-full w-full rounded-2xl" alt="" />
      </div>
      
      {
        user ?
      <div className="flex flex-col gap-5">
          <div className="w-[70%] mx-auto my-10">
    <Search placeholder="input search text" value={searchValue} onChange={(e) =>setSearchValue(e.target.value)}  enterButton />
     
    </div>
    <div>
    <Button style={{backgroundColor:"black", color:"white", border:"black"}}
      onClick={() => dispatch(setBlogAuthModal())} 
 
    >
        <PlusOutlined   />
      </Button>
    </div>
      </div>
        :
        <div className="flex flex-col w-[60%] mx-auto items-center justify-center">
        <h2 className="text-[70px]  font-bold text-center ">
        Monetize your content
        with <span className="text-logoColor">GreenShop</span>
        </h2>
        <p className="text-filterText text-center">GreenShop - a platform for buying and selling, publishing and monetizing all types of flowers: articles, notes, video, photos, podcasts or songs.</p>
        
        <div>      
          <Button style={ButtonStyle} className="font-normal! my-5" onClick={() =>dispatch(setauthorizationModalVisibility())}>Join GreenShop</Button>
        </div>
      </div>
      }

      <section className="grid grid-cols-3 gap-7 text-linkColor my-10">
          {
            isLoading  ? 
            <Spin />
            :
            blogData.length ==0 ?
            <Empty />
            :
            blogData?.map((val:BlogPost) =>(<BlogChild key={val._id} product={val} />))
          }
      </section>
      

      
    </div>
    
  )
}

export default Blog