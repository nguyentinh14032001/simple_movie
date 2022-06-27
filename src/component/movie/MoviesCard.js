import React from "react";

const MoviesCard = () => {
  return (
    <div className="movies-card rounded-lg p-3 bg-slate-800 text-white">
      <img
        src="http://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className=" text-xl  mb-3">Spiderman: Homecoming</h3>
      <div className=" flex items-center justify-between opacity-50 mb-5">
        <span>2017</span>
        <span>7.4</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize bg-primary text-white w-full">
        Watch now
      </button>
    </div>
  );
};

export default MoviesCard;
