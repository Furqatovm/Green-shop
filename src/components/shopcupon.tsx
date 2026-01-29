import { Button, Form, Input, Space,  type InputRef } from "antd"
import { ButtonStyle, inputStyle } from "../@types/@type"
import Prices from "../pages/shop/prices/price"
import { useRef } from "react";
import { useGetCoupon } from "../hook/useQuery/useQueryAction";
import { useReduxSelector } from "../hook/useRedux/useredux";

import { LoadingOutlined } from "@ant-design/icons";



const CartTotals = () => {
   
  const inputRef =useRef<InputRef>(null);
  const {mutate, isPending} =useGetCoupon()
  const getCoupon =() =>{
    const coupon = inputRef.current?.input?.value || "";
    mutate({coupon_code :coupon} )
  };

  const {coupon} =useReduxSelector((state) =>state.shopSlice);
  console.log(coupon)

  return (
    <Form onFinish={getCoupon} className="flex flex-col gap-3">
      <span className="text-linkColor text-blog-text-children">Coupon apply</span>
       <Form.Item name="coupon"
    rules={[
      {
        required: true,
        message: "Please enter coupon code",
      },
    ]}>
       <Space.Compact style={{ width: '100%' }}>
      <Input  ref={inputRef} style={inputStyle} placeholder="Enter coupon code here..." />
      <Button htmlType="submit" style={ButtonStyle} type="primary">{isPending ?<LoadingOutlined size={22} /> :"Apply"}</Button>
    </Space.Compact>
       </Form.Item>
    <Prices />
    </Form>
  )
}

export default CartTotals