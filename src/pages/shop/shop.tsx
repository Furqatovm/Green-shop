import CartItems from "../../components/cart-item";
import CartTotals from "../../components/shopcupon";

const Shop = () => {
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-8 mt-10">
      {/* LEFT SIDE */}
      <div>
        {/* HEADER */}
        <div className="grid px-4 grid-cols-[2.5fr_1fr_1.2fr_1fr_0.3fr] mb-4 text-linkColor font-medium border-b border-logoColor">
          <span>Products</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span></span>
        </div>

        {/* ITEMS */}
        <div className="flex flex-col gap-4">
          {Array.from({length:3}).map((_, index) =>  <CartItems key={index} />)}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <span>Card Total</span>
      <CartTotals />
    </div>
  );
};

export default Shop;
