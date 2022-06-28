import { Fragment, useState } from "react";
import "./App.scss";
import "swiper/scss";
import MoviesList from "./component/movie/MoviesList";
import Banner from "./component/banner/Banner";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner></Banner>
      <section className="movies-layout page-container pb-20 ">
        <h2 className="capitalize text-3xl font-bold mb-5  text-white  ">
          Now playing
        </h2>
        <MoviesList></MoviesList>
      </section>
      <section className="movies-layout page-container pb-20 ">
        <h2 className="capitalize text-3xl font-bold  mb-5 text-white  ">
          Top rated movies
        </h2>
      <MoviesList type='top_rated'></MoviesList>
      </section>
      <section className="movies-layout page-container pb-20 ">
        <h2 className="capitalize text-3xl font-bold mb-5  text-white  ">
          Trending
        </h2>
        <MoviesList type='popular'></MoviesList>
      </section>
    </Fragment>
  );
}

export default App;
