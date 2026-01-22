import { Skeleton } from "antd"

const DiscountLoaderItem = () => {
  return (
    <div className="flex flex-col gap-2 p-5">
        <Skeleton.Button block active/>
        <Skeleton.Button block active/>
        <Skeleton.Image   style={{width: "100%", height:"300px",}}  active/>
    </div>
  )
}

export default DiscountLoaderItem