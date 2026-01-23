import { Button, Card } from "antd";
import People from "../../assets/images/people.png";
import { ButtonStyle } from "../../@types/@type";
import BlogChild from "./blogChild";

const Blog = () => {
  return (
    <div className="px-2">
      <div className="bg-[#f5f5f5] p-4 rounded-2xl my-5">
      <img src={People} className="h-full w-full rounded-2xl" alt="" />
      </div>
      
      <div className="flex flex-col w-[60%] mx-auto items-center justify-center">
        <h2 className="text-[70px]  font-bold text-center ">
        Monetize your content
        with <span className="text-logoColor">GreenShop</span>
        </h2>
        <p className="text-filterText text-center">GreenShop - a platform for buying and selling, publishing and monetizing all types of flowers: articles, notes, video, photos, podcasts or songs.</p>
        <div>
        <Button style={ButtonStyle} className="font-normal! my-5">Join GreenShop</Button>
        </div>
      </div>

      <section className="grid grid-cols-3 gap-7 text-linkColor my-10">
          {
            Array.from({length: 9}).map((_, index) =>{
              return < BlogChild  key={index}/>
            })
          }
      </section>

      
    </div>
    
  )
}

export default Blog