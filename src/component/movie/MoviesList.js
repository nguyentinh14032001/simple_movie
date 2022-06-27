import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import MoviesCard from "./MoviesCard";
const MoviesList = () => {
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MoviesCard></MoviesCard>
        </SwiperSlide>
        <SwiperSlide>
          <MoviesCard></MoviesCard>
        </SwiperSlide>
        <SwiperSlide>
          <MoviesCard></MoviesCard>
        </SwiperSlide>
        <SwiperSlide>
          <MoviesCard></MoviesCard>
        </SwiperSlide>
        <SwiperSlide>
          <MoviesCard></MoviesCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MoviesList;
