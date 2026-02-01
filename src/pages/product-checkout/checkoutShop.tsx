import { Avatar } from "antd";
import { useReduxSelector } from "../../hook/useRedux/useredux";
import { Link } from "react-router-dom";
import type { ShopItemsType } from "../../@types/@type";


  
const CheckoutShop = () => {
    const shop =localStorage.getItem("shop")
const shopItems =shop ? JSON.parse(shop) :[];


const {data, coupon} =useReduxSelector((state) => state.shopSlice);
const totalPrice =data.reduce((total, value) =>(total +=value.userPrice),0);
const totalWithCoupon:number =+(totalPrice-(totalPrice *(coupon/100))+16).toFixed(2) || 0;

const couponValue:number =+(totalPrice* coupon/100).toFixed(2) || 0;


  return (
    <div className="mt-4">

        <div>
            {shopItems.map((val:ShopItemsType) =>{
                return <div key={val._id} className="item1 flex justify-between items-center bg-[#fbfbfb] p-2 rounded-[5px]">
                <div className="flex gap-2 items-center">
                    <Avatar shape="square" size={55}  src={val.main_image} />
                    <div>
                        <span className="text-linkColor text-blog-text-children block font-medium">{val.title}</span>
                        <span className="text-linkColor text-blog-text-children block">Sku:</span>
                        <span className="text-linkColor text-blog-text-children block">{val._id}</span>
                    </div>
                </div>
                <span className="text-blogText">(x{val.counter})</span>
                <span className="text-linkColor font-medium">${val.userPrice}</span>
            </div>
            })}
        </div>
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
    
   
    <Link to={"/"} className="text-filterChildren  text-logoColor block text-center cursor-pointer">Continue Shopping</Link>
    </div>
    </div>
  )
}

export default CheckoutShop