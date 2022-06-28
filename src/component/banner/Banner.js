import React from 'react';
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../config/config";
const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=6e57d5e625da27d817001b4f933c5b7a`,
    fetcher
  );

const movies= data?.results || [];

  return (
    <section className="banner page-container h-[500px] overflow-hidden mb-20">
    <Swiper grabCursor="true"  slidesPerView={'auto'}>
    {movies.length > 0 && movies.map((item) => (
      <SwiperSlide key={item.id}>
        <BannerItems items={item}></BannerItems>
      </SwiperSlide>
    ))}
    </Swiper>
    <BannerItems></BannerItems>

  </section>
 
  );

};

function BannerItems({items}){
console.log(items);
  return (
<div className="w-full h-full rounded-xl  relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-xl "></div>
      <img
        src={items&& `https://image.tmdb.org/t/p/original/${items.poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{items && items.title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
        </div>
        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
          Watch Now
        </button>
      </div>
    </div>
  )
}
export default Banner;