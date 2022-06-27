import { Fragment } from "react";
import "./App.scss";

import "swiper/scss";
import MoviesList from "./component/movie/MoviesList";
import useSWR from "swr";
import { fetcher } from "./component/config/config";
function App() {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/550?api_key=6e57d5e625da27d817001b4f933c5b7a",
    fetcher
  );
  console.log(data);
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner page-container h-[500px] mb-20">
        <div className="w-full h-full rounded-xl  relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-xl "></div>
          <img
            src="http://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
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
      </section>
      <section className="movies-layout page-container pb-20 ">
        <h2 className="capitalize text-3xl font-bold mb-5  text-white  ">
          Now playing
        </h2>
        <MoviesList></MoviesList>
      </section>
      <section className="movies-layout page-container pb-20 ">
        <h2 className="capitalize text-3xl font-bold mb-5  text-white  ">
          Top rated movies
        </h2>
        <div className="movies-list grid grid-cols-4 gap-10 "></div>
      </section>
      <section className="movies-layout page-container pb-20 ">
        <h2 className="capitalize text-3xl font-bold mb-5  text-white  ">
          Trending
        </h2>
        <div className="movies-list grid grid-cols-4 gap-10 "></div>
      </section>
    </Fragment>
  );
}

export default App;
