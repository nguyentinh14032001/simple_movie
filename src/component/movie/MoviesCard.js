import React from "react";

const MoviesCard = ({item}) => {
  const {
    title,
    overview,
    id,
    vote_average,
    release_date,
    poster_path,
  } = item
  
  // lấy năm

  const dateFilms = new Date(release_date).getFullYear();
  return (
    <div className=" select-none movies-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full ">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
      <h3 className=" text-xl  mb-3">{title}</h3>
      <div className=" flex mt-auto items-center justify-between opacity-50 mb-5">
        <span>{dateFilms}</span>
        <span>{vote_average}</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize bg-primary text-white w-full mt-auto">
        Watch now
      </button>
      </div>
    </div>
  );
};

export default MoviesCard;
