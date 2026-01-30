import { Avatar, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Delete from "../assets/icons/delete";
import type { FC } from "react";
import type { ShopCardType } from "../@types/@type";
import { useReduxDispatch } from "../hook/useRedux/useredux";
import { decrement, deleteData, incrementNumber } from "../redux/shop-slice";




const CartItems:FC<ShopCardType> = (product) => {
const dispatch =useReduxDispatch()

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-[2.5fr_1fr_1.2fr_1fr_0.3fr] items-center bg-[#f8f8f8] px-3 py-4 rounded-md">
        <div className="flex gap-4 items-center">
          <Avatar src={product.main_image} shape="square" size={"large"} />
          <div>
            <h3 className="text-linkColor font-medium">{product.title}</h3>
            <span className="text-blogText text-blog-text-children font-light">
              SKU: <span className="font-normal">{product._id}</span>
            </span>
          </div>
        </div>

        <span className="text-blogText font-medium">${product.price.toFixed(2)}</span>

        <div className="flex gap-2 items-center">
          <Button
            shape="circle"
            size="middle" 
            onClick={() =>dispatch(incrementNumber(product._id)) }
            style={{ backgroundColor: "#46A358", color: "white", borderColor: "#46A358" }}
            icon={<PlusOutlined />}
          />
          <span className="text-linkColor text-[17px]">{product.counter}</span>
          <Button
            shape="circle"
            size="middle"
            onClick={() =>dispatch(decrement(product._id))}
            style={{ backgroundColor: "#46A358", color: "white", borderColor: "#46A358" }}
            icon={<MinusOutlined />}
          />
        </div>

        <span className="text-logoColor font-bold">${product.userPrice?.toFixed(2)}</span>

        <span onClick={()=> dispatch(deleteData(product._id))} className="hover:text-logoColor cursor-pointer">
          <Delete />
        </span>
      </div>
    </div>
  );
};

export default CartItems;
