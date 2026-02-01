import CheckOutModal from "./checkoutModal"
import CheckoutShop from "./checkoutShop"
import CheckoutFrom from "./form"
const ProductCheckout = () => {
  

    

  return (
    <div className="flex gap-8">
        <CheckOutModal />
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