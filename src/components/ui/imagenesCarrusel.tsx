import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";


export function ImagenesCarrusel({imagenesCarrusel}:{imagenesCarrusel:string[]}) {

    return (
        <div>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          pagination={{ 
            clickable: true, 
            dynamicBullets: true
          }}
          autoplay={{ 
            delay: 3500,
            disableOnInteraction: false 
          }}
          breakpoints={{
            865: {
              slidesPerView: 2,
            },
            320: { 
              slidesPerView: 1,
            }
          }}
        >
          {imagenesCarrusel.map((imagen, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img 
                loading="lazy"
                src={imagen}
                alt={`Banner ${index + 1}`}
                className="w-[96%] h-[40rem] object-cover mx-auto" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    )
}