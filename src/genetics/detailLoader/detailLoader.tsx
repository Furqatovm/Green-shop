import {  Skeleton, Space } from "antd"

const DetailLoader = () => {
  return (
    <div className="flex gap-5">
      
      {/* Thumbnails */}
      <Space orientation="vertical">
      </Space>

      {/* Main image */}
      <div className="p-4 bg-[#FBFBFB] rounded-lg grid grid-cols-[1fr_4fr] gap-4">
        <div className="flex flex-col gap-2">
      {Array.from({length: 4}).map((_, index) =>(<Skeleton.Image active key={index}  className="w-100"/>))}
        </div>
        <div className="w-full">
            <Skeleton.Input style={{height:"500px", width:"100%"}} active block  />
        </div>
        
      </div>
    </div>
  )
}

export default DetailLoader