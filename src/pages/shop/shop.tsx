import { Empty } from "antd";
import CartItems from "../../components/cart-item";
import CartTotals from "../../components/shopcupon";
import { useReduxSelector } from "../../hook/useRedux/useredux";

const Shop = () => {
  const {data} =useReduxSelector((state) =>state.shopSlice)
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-8 mt-10">
      {/* LEFT SIDE */}
      <div>
        {/* HEADER */}
        <div className="grid px-4 grid-cols-[2.5fr_1fr_1.2fr_1fr_0.3fr] mb-4 text-linkColor font-medium border-b pb-2 border-[#46A35880]">
          <span>Products</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span></span>
        </div>

        {/* ITEMS */}
        <div className="flex flex-col gap-4">
          {
           data.length ==0 ? 
           <Empty />
           :
           data.map((val) => < CartItems key={val._id} {...val} />)
          }
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
      <span className="text-filterChildren font-bold block border-b border-[#46A35880] mb-2 pb-2">Card Total</span>
      <CartTotals />
      </div>
    </div>
  );
};

export default Shop;
