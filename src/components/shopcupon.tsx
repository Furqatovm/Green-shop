import { Button, Input, Space } from "antd"
import { ButtonStyle, inputStyle } from "../@types/@type"
import Prices from "../pages/shop/prices/price"



const CartTotals = () => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-linkColor text-blog-text-children">Coupon apply</span>
      <Space.Compact style={{ width: '100%' }}>
      <Input style={inputStyle} placeholder="Enter coupon code here..." />
      <Button style={ButtonStyle} type="primary">Apply</Button>
    </Space.Compact>
    <Prices />
    </div>
  )
}

export default CartTotals