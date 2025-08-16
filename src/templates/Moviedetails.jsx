import React, { useEffect } from "react";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import HorizontalCard from "./HorizontalCard";
import Loading from "../components/Loading";

const Moviedetails = () => {
  const { info } = useSelector((state) => state.movie);
  useEffect(() => {
    // Only try to set the title if the 'info' object and its properties exist
    if (info && info.detail && info.detail.title) {
      document.title = `Cinevault | ${info.detail.title ||
              info.detail.name ||
              info.detail.original_name ||
              info.detail.original_title}`;
    }
  }, [info]);


  const videos = info?.videos?.results;
  const officialTrailer = videos?.find((video) => video.type === "Trailer");
  const key = officialTrailer?.key || videos?.[0]?.key;

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  

  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(
      rgba(0,0,0,0.2), 
      rgba(0,0,0,0.5), 
      rgba(0,0,0,0.7)
    ), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top 20%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-[140vh] px-[10vh] relative"
    >
      <nav className="h-[10vh] w-full text-zinc-100 flex gap-10 text-2xl items-center">
        <Link
          onClick={() => Navigate(-1)}
          className=" hover:text-[#6556CD]  ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDB
        </a>
        <Link to="/">Home</Link>
      </nav>

      <div className="w-full flex">
        <img
          className="w-[40vh] h-[60vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] "
          src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path})`}
          alt=""
        />
        <div className="conten ml-[5%] text-white">
          <h1 className="text-5xl font-black text-white">
            {info.detail.title ||
              info.detail.name ||
              info.detail.original_name ||
              info.detail.original_title}{" "}
            <small className="text-xl font-bold text-zinc-300 ">
              {info.detail.release_date.split("-")[0]}
            </small>
          </h1>

          <div className="flex text-white items-center gap-x-5 mt-5 mb-10">
            <span className="rounded-full bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="font-semibold text-2xl w-[60px] leading-6">
              User Score
            </h1>
            <h1 className="">{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime} min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200 ">
            {info.detail.tagline}
          </h1>
          <h1 className="text-xl font-semibold mt-5 ">Overview</h1>
          <p>{info.detail.overview}</p>

          <h1 className="text-xl font-semibold mt-5 ">Movie Translations</h1>
          <p className="mb-10">{info.translations.join(", ")}</p>

          <a
            href={`https://www.youtube.com/watch?v=${key}`}
            target="_blank" // This opens the link in a new tab
            rel="noopener noreferrer" // Important for security
            className="py-5 px-10 bg-[#6556CD] rounded-lg"
          >
            <i className="ri-play-line mr-3"></i> Play Trailer
          </a>
        </div>

        <div></div>
      </div>
      <hr className="mt-10" />
      <h1 className="text-2xl font-semibold text-white mt-10">
        Recommendations
      </h1>
      <HorizontalCard
        data={info.recommendations.length ? info.recommendations : info.similar}
      />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
