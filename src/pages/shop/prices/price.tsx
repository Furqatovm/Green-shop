import { Button } from "antd"
import { ButtonStyle } from "../../../@types/@type"
import { useReduxSelector } from "../../../hook/useRedux/useredux"

const Prices = () => {
  const {data, coupon} =useReduxSelector((state) => state.shopSlice);
  const totalPrice =data.reduce((total, value) =>(total +=value.userPrice),0);
  const totalWithCoupon:number =+(totalPrice-(totalPrice *(coupon/100))+16).toFixed(2) || 0;

  const couponValue:number =+(totalPrice* coupon/100).toFixed(2) || 0;

  return (
    <div   className='flex flex-col gap-3'>
        <div className="flex justify-between items-center">
      <span className="text-linkColor text-filterChildren">Subtotal</span>
      <h3 className="text-linkColor text-filterText font-medium">${totalPrice.toFixed(2)}</h3>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-linkColor text-filterChildren">Coupon Discount</span>
      <h3 className="text-blog-text-children text-red-500">{coupon}%</h3>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-linkColor text-filterChildren">Delivery</span>
      <h3 className="text-linkColor text-filterText font-medium">$ 16</h3>    </div>
    <span className="text-logoColor text-[12px] block text-end">View shipping charge</span>

    <div className="flex justify-between items-center">
      <span className="text-linkColor  text-[1rem] font-bold">Total</span>
      <h3 className="text-logoColor text-filterText font-bold">${totalWithCoupon}</h3>
    </div>
    {
      Boolean(coupon) &&(
      <h3 className="text-red-500 text-end font-bold">-${couponValue}</h3>
      )
    }
    
    <Button style={{...ButtonStyle, width:"100%"}}>Proceed to checkout</Button>
    <span className="text-filterChildren  text-logoColor block text-center cursor-pointer">Continue Shopping</span>
    </div>
  )
}

export default Prices