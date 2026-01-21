import { Button, Select, Slider } from "antd"
import textImage from "../assets/images/textImg.png"
import img2 from "../assets/images/rasm2.png";

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

    const ButtonStyle ={
        backgroundColor: '#46A358',
        color: '#fff',             
        borderColor: '#46A358',  
        fontWeight:"700",
        padding:"9px 20px"
    }
  return (
    <div className="my-10  flex gap-13">
        <div className="w-77.5 h-auto bg-[#FBFBFB] ">
            <span className="text-linkColor text-filterText font-bold p-5 block">Category</span>
            <div className="px-7  flex flex-col gap-5">
                <span className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>House Plants</p>
                    <span>(33)</span>
                </span>

                <span className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>Potter Plants</p>
                    <span>(33)</span>
                </span>

                <span className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>Seeds</p>
                    <span>(33)</span>
                </span>

                <span className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>Small Plants</p>
                    <span>(33)</span>
                </span>

                <span className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>Big Plants</p>
                    <span>(33)</span>
                </span>

                <span className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>Succulents</p>
                    <span>(33)</span>
                </span>

                <span className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>Trerrariums</p>
                    <span>(33)</span>
                </span>

                <span className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>Gardening</p>
                    <span>(33)</span>
                </span>


                <span className="text-filterChildren  text-linkColor flex justify-between items-center">
                    <p>Accessories</p>
                    <span>(33)</span>
                </span>
            </div>

            <span className="text-linkColor text-filterText font-bold block p-5">Category</span>

            <div className="text-filterChildren text-linkColor flex flex-col gap-3 px-7">
            <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} styles={sliderStyle} />
            <p>Price: <span className="text-logoColor font-bold">$39 - $1230</span></p>
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
                    <img src={img2} alt="" />
                </div>




        </div>
        <div className="flex-1">

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

        </div>
    </div>
  )
}

export default FilterPage