import { Avatar, Button, Radio } from "antd"
import { useState } from "react";
import {  HeartOutlined } from "@ant-design/icons";
import { ButtonStyle, type DetailType } from "../../@types/@type";
import Star from "../../assets/icons/start";
import { useQueryHandler } from "../../hook/useQuery/usequery";
import { useReduxDispatch } from "../../hook/useRedux/useredux";
import { getData } from "../../redux/shop-slice";



const DetailRight:React.FC<DetailType> = ({product}) => {
    const [size, setSize] = useState("S");
    const tags:string[] =product?.tags ||[]
    const rate:number =product?.rate ||0;

    const userId =product?.created_by
    const {data} =useQueryHandler({
      url:`user/by_id/${userId}`,
      pathname:`get-user-info`
    })

    const user =data?.data


    const dispatch =useReduxDispatch();


    



  return (
    <div className="flex flex-col gap-2">
      <div title={`${user?.username}`} className="flex gap-2 items-center">
        <Avatar src={user?.profile_photo}  size={"large"}/>
      <h3 className="text-linkColor text-[28px] font-bold">{user?.surname}</h3>
      </div>
        <div className="flex items-center justify-between  border-b border-[#46A35880]">
            <span className="text-logoColor text-[22px] font-bold">${product?.price.toFixed(2)}</span>
            <span className="text-linkColor text-filterChildren flex gap-2 items-center">
                <span className="flex gap-1 items-center">{Array.from({length :rate}).map((_, index) =><Star key={index} />)}</span>
            19 Customer Review
            </span>
        </div>
        <span className="text-linkColor text-filterChildren font-semibold">Short Description:</span>
        <p className="text-blogText text-blog-text-children">{product?.description}</p>
        <div>
        <span className="text-linkColor text-filterChildren font-semibold">SIze:</span>
            <Radio.Group
  value={size}
  onChange={(e) => setSize(e.target.value)}
  optionType="button"
  buttonStyle="solid"
  style={{ display: "flex", gap: "10px", marginTop:"1rem" }}
>
  {["S", "M", "L", "XL"].map((item) => (
    <Radio.Button
      key={item}
      value={item}
      style={{
        borderRadius: "50%",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: size === item ? "#46A358" : "transparent",
        color: size === item ? "white":"#46A358",
        objectFit:"contain",
        width:"30px",
        borderColor: "#46A358",
      }}
    >
      {item}
    </Radio.Button>
  ))}
</Radio.Group>

<div className="flex gap-4 items-center my-5">
    <Button style={{...ButtonStyle, textTransform:"uppercase"}}>
        Buy now
    </Button>
    <Button style={{...ButtonStyle, textTransform:"uppercase", backgroundColor:"transparent", color:"#46A358"}} onClick={()=>dispatch(getData(product))}>
        Add to cart
    </Button>
    <Button style={{...ButtonStyle, fontSize:"20px" , backgroundColor:"transparent", padding:"20px 10px", color:"#46A358"}}>
        <HeartOutlined />
    </Button>
</div>


  
        </div>

        
<div>
    <span className="text-blogText text-blog-text-children font-light block my-2">SKU: <span className="font-normal">{product?._id}</span></span>
    <span className="text-blogText text-blog-text-children font-light block my-2">Categories: <span className="font-normal">{product?.category}</span></span>
    {tags.length !==0 && (
    <span className="text-blogText text-blog-text-children font-light block my-2">Tags:<span className="font-normal">{tags.map((val) =>(val)) }</span></span>
    )}
</div>
    </div>
  )
}

export default DetailRight