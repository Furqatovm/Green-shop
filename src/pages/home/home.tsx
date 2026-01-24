import FilterPage from "../../components/filter"
import Last from "../../components/last"
import MySwiper from "../../components/swiper"
import HomeBlog from "../homeblog/homeblog"


const Home = () => {
  return (
    <div className="mx-auto px-2 bg-white  my-4">
      <div className="h-[70vh] max-md:bg-linear-to-br from-[#d2e9d6]  bg-[#f9f9f9] to-[#eaf5ec]">
      <MySwiper />
      </div>
      <FilterPage />
      <Last />
      <HomeBlog />
    </div>
  )
}

export default Home