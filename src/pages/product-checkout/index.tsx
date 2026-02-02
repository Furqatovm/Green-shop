import CheckOutModal from "./checkoutModal"
import CheckoutShop from "./checkoutShop"
import CheckoutFrom from "./form"
const ProductCheckout = () => {
  

    const orders =localStorage.getItem("orders");

  return (
    <div className="flex gap-8">
      {orders && <CheckOutModal />}
    <div className="w-[55%]">
        <CheckoutFrom />
    </div>
    <div className="w-[40%]">
    <CheckoutShop />
    </div>
    </div>
  )
}

export default ProductCheckout