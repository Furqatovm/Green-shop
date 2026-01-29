import { Button } from "antd"
import { ButtonStyle } from "../../../@types/@type"

const Prices = () => {
  return (
    <div className='flex flex-col gap-3'>
        <div className="flex justify-between items-center">
      <span className="text-linkColor text-filterChildren">Subtotal</span>
      <h3 className="text-linkColor text-filterText font-medium">$2,683.00</h3>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-linkColor text-filterChildren">Subtotal</span>
      <h3 className="text-linkColor text-filterText font-medium">$2,683.00</h3>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-linkColor text-filterChildren">Subtotal</span>
      <h3 className="text-linkColor text-filterText font-medium">$2,683.00</h3>
    </div>
    <span className="text-logoColor text-[12px] block text-end">View shipping charge</span>

    <div className="flex justify-between items-center">
      <span className="text-linkColor  text-[1rem] font-bold">Subtotal</span>
      <h3 className="text-logoColor text-filterText font-bold">$2,683.00</h3>
    </div>
    
    <Button style={{...ButtonStyle, width:"100%"}}>Proceed to checkout</Button>
    <span className="text-filterChildren  text-logoColor block text-center cursor-pointer">Continue Shopping</span>
    </div>
  )
}

export default Prices