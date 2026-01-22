
import { useQueryHandler } from "../../hook/useQuery/usequery";
import type { DiscountedItem } from "../../@types/@type";
import  DiscountLoaderItem from "../../genetics/discountLoader/discountloaderItem";


const DiscountedProduct = () => {
    const {data, isPending, isError} =useQueryHandler({
        url:"features/discount",
        pathname:"discount-product-info",
    })

    const value:DiscountedItem =data?.data


  return (
        
       <div className=" mt-8">
        {
            isPending ||isError ?
            <DiscountLoaderItem />:
            <div key={value?.id} className="bg-linear-to-b from-[#46A3581A] to-[#46A35808] h-auto">
            <span className="text-[1.5rem] font-bold text-center p-2 block text-logoColor">{value?.title}</span>
            <span className="uppercase text-[23px] font-black text-linkColor text-center block py-2">up to {value?.discoount_up_to}% off</span>
            <img src={value?.poster_image_url} className="w-full p-4" alt="" />
            </div>
        }
       </div>
  )
}

export default DiscountedProduct