import { Button } from "antd"
import { ButtonStyle } from "../@types/@type"
import { FaArrowRightLong } from "react-icons/fa6";
import yashil from "../assets/images/yashil.png"



const LastCard = ({information}:any) => {

    return (
    <div className="flex justify-between items-center relative bg-[#FBFBFB] p-8">
        <div className="w-[65%]">
            <img src={information.img}  className="w-full" alt="" />
            <div className="absolute bottom-0 left-0 flex">
            <img src={yashil} alt="" />
            </div>
        </div>
        <div className="right flex flex-col gap-4">
            <h3 className="text-[1.5rem] font-bold text-end">
            SUMMER CACTUS
            & SUCCULENTS

{/* We are an online plant shop offering a wide
range of cheap and trendy plants

Find More  */}
            </h3>
            <p className="text-linkColor text-filterChildren text-end">
            We are an online plant shop offering a wide
            range of cheap and trendy plants 
            </p>
            <div className="flex items-end justify-end">
            <Button style={ButtonStyle}>
                Find More 
                {<FaArrowRightLong />}
            </Button>
            </div>
        </div>
    </div>
  )
}

export default LastCard