import { Skeleton } from "antd"

const FilterSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
       {Array.from({length:9}, (_, index) =>{
        return(
            <Skeleton.Input active block key={index} />
        )
       })}
    </div>
  )
}

export default FilterSkeleton