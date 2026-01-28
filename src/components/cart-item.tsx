import { Avatar, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Delete from "../assets/icons/delete";

const CartItems = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* ITEM */}
      <div className="grid grid-cols-[2.5fr_1fr_1.2fr_1fr_0.3fr] items-center bg-[#f8f8f8] px-3 py-4 rounded-md">
        {/* Product Info */}
        <div className="flex gap-4 items-center">
          <Avatar shape="square" size={"large"} />
          <div>
            <h3 className="text-linkColor font-medium">Products</h3>
            <span className="text-blogText text-blog-text-children font-light">
              SKU: <span className="font-normal">1995751877966</span>
            </span>
          </div>
        </div>

        {/* Price per item */}
        <span className="text-blogText font-medium">$119.00</span>

        {/* Quantity controls */}
        <div className="flex gap-2 items-center">
          <Button
            shape="circle"
            size="middle"
            style={{ backgroundColor: "#46A358", color: "white", borderColor: "#46A358" }}
            icon={<PlusOutlined />}
          />
          <span className="text-linkColor text-[17px]">2</span>
          <Button
            shape="circle"
            size="middle"
            style={{ backgroundColor: "#46A358", color: "white", borderColor: "#46A358" }}
            icon={<MinusOutlined />}
          />
        </div>

        {/* Total Price */}
        <span className="text-logoColor font-bold">$238.00</span>

        {/* Delete */}
        <span className="hover:text-logoColor cursor-pointer">
          <Delete />
        </span>
      </div>
    </div>
  );
};

export default CartItems;
