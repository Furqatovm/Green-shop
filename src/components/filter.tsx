import { Button, Select, Slider } from "antd"
import textImage from "../assets/images/textImg.png"
import img2 from "../assets/images/img.png";
import Card from "./card";
import MyPagination from "./pagination";
import { ButtonStyle, type Category } from "../@types/@type";
import { useState } from "react";
import { useQueryHandler } from "../hook/useQuery/usequery";

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

    const { data, isLoading, isError, error } = useQueryHandler({
        url: "flower/category",
        pathname: "get-by-category"
      })

      console.log(data)
  
  return (
    <section>

    <div className="my-10  flex gap-13">
        <div className="w-77.5 h-auto bg-[#FBFBFB] ">
            <span className="text-linkColor text-filterText font-bold p-5 block">Category</span>
            <div className="px-7  flex flex-col gap-5">
                {data?.data?.map((val:Category) =>{
                    return (
                        <span key={val._id} className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>{val.title}</p>
                    <span>({val.count})</span>
                </span>
                    )
                })}
            </div>

            <span className="text-linkColor text-filterText font-bold block p-5">Category</span>

            <div className="text-filterChildren text-linkColor flex flex-col gap-3 px-7">
            <Slider range={{ draggableTrack: true }} defaultValue={sliderValue} onChange={(e:number[]) =>setSliderValue(e)} max={1000} min={0} styles={sliderStyle} />
            <p>Price: <span className="text-logoColor font-bold">${sliderValue[0]} - ${sliderValue[1]}</span></p>
            <div>
                <Button style={ButtonStyle}>Filter</Button>
            </div>
            </div>

            <span className="text-linkColor text-filterText font-bold mt-8 px-5 mb-3 block">Size</span>

                <div className="text-filterChildren text-linkColor flex flex-col gap-5 px-7">
                <span className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>Accessories</p>
                    <span>(33)</span>
                </span>

                <span className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>Accessories</p>
                    <span>(33)</span>
                </span>

                <span className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>Accessories</p>
                    <span>(33)</span>
                </span>
                </div>


                <div className="bg-linear-to-b from-[#46A3581A] to-[##46A35808] mt-8">
                    <img src={textImage} className="w-full px-5" alt="" />
                    <span className="uppercase text-[23px] font-black text-linkColor text-center block py-2">up to 75% off</span>
                    <img src={img2} className="w-full" alt="" />
                </div>




        </div>
        <div className="flex-1 transition-none!">

            <div className="flex justify-between items-center">

                <div className="flex gap-10">
                    <span className="text-filterChildren">All Plants</span>
                    <span className="text-filterChildren">New Arrivals</span>
                    <span className="text-filterChildren">Sale</span>
                </div>

                <div>
                    <span>Sort by:</span>

  <Select
    placeholder="Select an option"
    showSearch={{
      optionFilterProp: ['label', 'otherField'],
    }}
    options={[
      { value: 'a11', label: 'a11', otherField: 'c11' },
      { value: 'b22', label: 'b22', otherField: 'b11' },
      { value: 'c33', label: 'c33', otherField: 'b33' },
      { value: 'd44', label: 'd44', otherField: 'd44' },
    ]}
    style={selectStyle}
  />

                </div>

            </div>

                  {/* Manashu joyidan rasmlar boshlanadi */}

           <div className="grid grid-cols-3 gap-10 my-5 ">
           {Array.from({ length: 9 }).map((_, index) => (
        <Card key={index}  />
      ))}

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