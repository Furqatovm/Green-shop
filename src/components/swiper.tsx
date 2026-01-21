import { Swiper, SwiperSlide } from 'swiper/react';
import Flower from "../assets/images/flower.png"


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
const MySwiper=()  => {
  return (
    <Swiper className='px-10!'
    modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 2000, disableOnInteraction: false }} // auto slide every 5s
      pagination={{ clickable: true, type: 'bullets',}} // round dots
      loop={true}
      style={{ '--swiper-pagination-color': '#46A358' } as any}
    >
      <SwiperSlide className='flex! justify-between! items-center!'>
          <div className='w-[50%] flex flex-col gap-2'>
            <span className='text-linkColor font-medium uppercase  max-md:text-[11px]'>Welcome to GreenShop</span>
            <h1 className='text-[70px] font-black max-md:text-[24px] max-md:leading-7.25 uppercase leading-17.5' >Let’s Make a
            Better <span className='text-logoColor'>Planet</span></h1>
            <span className='text-[14px] text-[#727272] leading-6 hidden max-md:block'>We are an online plant shop offering a wide range </span>
            <span className='text-[14px] text-[#727272] leading-6 max-md:hidden'>We are an online plant shop offering a wide range of cheap and trendy plants. <span className='max-sm:hidden'> Use our plants to create an unique Urban Jungle. Order your favorite plants!</span></span>
            <div className='my-7'>
            <button className=" uppercase bg-logoColor text-white text-[1rem] flex gap-2 py-1.5 px-4 hover:opacity-90 rounded-md cursor-pointer items-center font-medium">
              shop Now
    </button>
            </div>
            </div>  
              <div className='w-[45%] relative'>
                <div className='absolute bottom-10 -right-6'>
                <img src={Flower} className='w-[25%]' alt="" />
                </div>
                <img src={Flower} alt="" />
              </div>
        
      </SwiperSlide>

      <SwiperSlide className='flex! justify-between! items-center! max-md:flex-col!'>
          <div className='w-[45%] flex flex-col gap-2 max-md:w-full'>
            <span className='text-linkColor font-medium uppercase'>Welcome to GreenShop</span>
            <h1 className='text-[70px] font-black max-md:text-[42px] uppercase leading-17.5'>Let’s Make a
            Better <span className='text-logoColor'>Planet</span></h1>
            <span className='text-[14px] text-[#727272] leading-6'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</span>
            <div className='my-7'>
            <button className=" uppercase bg-logoColor text-white text-[1rem] flex gap-2 py-1.5 px-4 hover:opacity-90 rounded-md cursor-pointer items-center font-medium">
              shop Now
    </button>
            </div>
            </div>  
              <div className='w-[40%] relative max-md:w-full'>
                <div className='absolute bottom-10 -right-6'>
                <img src={Flower} className='w-[25%]' alt="" />
                </div>
                <img src={Flower} alt="" />
              </div>
        
      </SwiperSlide>


      <SwiperSlide className='flex! justify-between! items-center! max-md:flex-col!'>
          <div className='w-[45%] flex flex-col gap-2 max-md:w-full'>
            <span className='text-linkColor font-medium uppercase'>Welcome to GreenShop</span>
            <h1 className='text-[70px] font-black max-md:text-[42px] uppercase leading-17.5'>Let’s Make a
            Better <span className='text-logoColor'>Planet</span></h1>
            <span className='text-[14px] text-[#727272] leading-6'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</span>
            <div className='my-7'>
            <button className=" uppercase bg-logoColor text-white text-[1rem] flex gap-2 py-1.5 px-4 hover:opacity-90 rounded-md cursor-pointer items-center font-medium">
              shop Now
    </button>
            </div>
            </div>  
              <div className='w-[40%] relative max-md:w-full'>
                <div className='absolute bottom-10 -right-6'>
                <img src={Flower} className='w-[25%]' alt="" />
                </div>
                <img src={Flower} alt="" />
              </div>
        
      </SwiperSlide>


      
  
    </Swiper>
  );
};

export default MySwiper