import type { PrototypeDataType } from "../../@types/@type"
import { blogs } from "../../utils/prototypeData"
import { HiOutlineArrowRight } from "react-icons/hi";


const HomeBlog = () => {
    
  return (
    <div className="my-10">
        <h3 className="text-linkColor text-[30px] font-bold text-center">Our Blog Posts</h3>
        <p className="my-3 text-blogText text-center text-blog-text-children">We are an online plant shop offering a wide range of cheap and trendy plants. </p>

        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1  gap-10 my-10">
            {
                blogs.map((val:PrototypeDataType) =>{
                    return  <div key={(Math.random())+(Date.now())} className="flex flex-col items-center justify-center shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] rounded-sm">
                       <img src={val.img}  className="rounded-t-sm" alt="" />
                    <div className="bg-[#FBFBFB] rounded-b-sm p-4 flex flex-col gap-1 items-start">
                        <span className="text-logoColor text-blog-text-children font-medium">{val.created_at}</span>
                        <h4 className="text-linkColor font-bold text-[20px] w-[80%]">{val.title}</h4>
                        <p className="text-blogText text-blog-text-children">{val.description}</p>
                        <button className="text-blog-text-children text-linkColor font-medium flex gap-2 items-center cursor-pointer">Read More 
                            <HiOutlineArrowRight />
                        </button>
                    </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default HomeBlog