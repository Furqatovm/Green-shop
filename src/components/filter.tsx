import { Button, Select, Slider } from "antd"
import Card from "./card";
import MyPagination from "./pagination";
import { ButtonStyle, type Category, type ProductItem } from "../@types/@type";
import {  useState } from "react";
import { useQueryHandler } from "../hook/useQuery/usequery";
import FilterSkeleton from "../genetics/filterSkeleton/filterSkeleton";
import DiscountedProduct from "./discount/discount";
import ImageSkeleton from "../genetics/imageSkeleton/image";

const FilterPage = () => {
    const selectStyle ={
        borderColor: 'transparent',
    boxShadow: 'none',          
    backgroundColor: '#fff',
    cursor:"pointer"
    }

    const sliderStyle ={
        track:{
            backgroundColor:"#46A358",
        },
        handle:{
            borderColor:"#46A358"!,
            backgroundColor:"#46A358"!,
            
        }
    }

    const [sliderValue, setSliderValue] =useState<number[]>([0, 1000]);
    const [category, setCategory] =useState<string>("house-plants")
    const [type, setType] =useState<"all"|"new-arrivals"|"sale">("all");
    const [sorting, setSorting] =useState<string>("default")

    const { data, isPending, isError } = useQueryHandler({
        url: `flower/category`,
        pathname: "get-by-category"
      })


      const {data:data2, isPending:isPeding2, isLoading:isLoading2, isError:isError2 } =useQueryHandler({
        url:`flower/category/${category}`,
        pathname: `get-by-category-filter`,
        param:{
            type,
            sort:sorting,
            range_min:sliderValue[0],
            range_max:sliderValue[1]
        }
      })
 


      
      console.log(type)
  
  return (
    <section>

    <div className="my-10   grid grid-cols-[1fr_3.5fr] gap-10">
        <div className=" h-fit bg-[#FBFBFB] ">
            <span className="text-linkColor text-filterText font-bold p-5 block">Category</span>
            <div className="px-7  flex flex-col gap-5">
                {isPending ||isError ? 
                <FilterSkeleton />
                :
                data?.data?.map((val:Category) =>{
                    console.log(val)
                    return (
                        <span onClick={() =>
                            setCategory(val.route_path)
                        }  key={val._id} className="text-filterChildren  hover:text-logoColor cursor-pointer  font-medium text-linkColor flex justify-between items-center">
                    <p>{val.title}</p>
                    <span>({val.count})</span>
                </span>
                    )
                })
                }
            </div>

            <span className="text-linkColor text-filterText font-bold block p-5">Category</span>

            <div className="text-filterChildren text-linkColor flex flex-col gap-3 px-7">
            <Slider range={{ draggableTrack: true }} defaultValue={sliderValue} onChange={(e:number[]) =>setSliderValue(e)} max={1000} min={0} styles={sliderStyle} />
            <p>Price: <span className="text-logoColor font-bold">${sliderValue[0]} - ${sliderValue[1]}</span></p>
            <div>
                <Button style={ButtonStyle}>Filter</Button>
            </div>
            </div>


            <div className="pb-10">
            <DiscountedProduct />
            </div>

        </div>
        <div className="flex-1 transition-none! ">

            <div className="flex justify-between items-center">

                <div className="flex gap-10">
                    <span className={`text-filterChildren hover:text-logoColor font-medium cursor-pointer ${type =="all" ? "text-logoColor":"text-linkColor"}`} onClick={() =>setType("all")} defaultValue={"all"}>All Plants</span>
                    <span className={`text-filterChildren hover:text-logoColor font-medium cursor-pointer ${type =="new-arrivals" ? "text-logoColor":"text-linkColor"}`} onClick={() =>setType("new-arrivals")} defaultValue={"new-arrivals"}>New Arrivals</span>
                    <span className={`text-filterChildren hover:text-logoColor font-medium cursor-pointer ${type =="sale" ? "text-logoColor":"text-linkColor"}`} onClick={() =>setType("sale")} defaultValue={"sale"}>Sale</span>
                </div>

                <div>
                    <span>Sort by:</span>

  <Select onChange={(e) => setSorting(e)}
    placeholder="Select an option"
    value={sorting}
    defaultValue={"default sorting"}
    options={[
      { value: 'cheapest', label: 'The Cheapest', },
      { value: 'expensive', label: 'The most expensive', },
      { value: 'default', label: 'Default sorting', },
    ]}
    style={selectStyle}
  />

                </div>

            </div>

                  {/* Manashu joyidan rasmlar boshlanadi */}

           <div className="grid grid-cols-3 gap-10 my-5 ">
           {
            isPeding2||isError2 ||isLoading2 ?
            Array.from({length: 9}).map((_, index) =>{
                return <ImageSkeleton key={index}/>
            })
            :
            data2?.data.map((val:ProductItem) =>{
                return   <Card  key={val._id} {...val}/>
               })
           }

        </div>


        </div>



 
     
    </div>
    <div className="flex items-end justify-end">
<MyPagination />
</div>    
    </section>
  )
}

export default FilterPage