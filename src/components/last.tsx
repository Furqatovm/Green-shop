import LastCard from "./lastcard"
import Gul from "../assets/images/gul.png"

const Last = () => {
    const info ={
        img:Gul,
    }
  return ( 
    <div className="grid grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-15 my-20">
        <LastCard  information={info}/>
        <LastCard information={info}/>
    </div>
  )
}

export default Last