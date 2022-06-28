import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config/config";
import { SwiperSlide, Swiper } from "swiper/react";
import MoviesCard from "./MoviesCard";
const MoviesList = ({type='now_playing'}) => {


  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=6e57d5e625da27d817001b4f933c5b7a`,
    fetcher
  );

const movies= data?.results || [];

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key= {item.id} >
              <MoviesCard item={item}></MoviesCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MoviesList;
