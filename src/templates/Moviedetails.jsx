import React, { useEffect } from "react";
import { asyncloadmovie } from "../store/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Moviedetails = () => {
  const {info} = useSelector((state)=>state.movie)
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
  }, []);
  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(
      rgba(0,0,0,0.2), 
      rgba(0,0,0,0.5), 
      rgba(0,0,0,0.7)
    ), url(https://image.tmdb.org/t/p/original/${
      info.detail.backdrop_path
    })`,
        backgroundPosition: "top 20%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen px-[10px]"
    >
      <nav className="h-[10vh] w-full text-zinc-100 flex gap-10 text-2xl items-center">
        <Link
          onClick={() => Navigate(-1)}
          className=" hover:text-[#6556CD]  ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i class="ri-external-link-line"></i>
        </a>
        <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
          <i class="ri-earth-line"></i>
        </a>
        <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>IMDB</a>
      </nav>

      <div>
        
      </div>
    </div>
  ): <Loading/>
};

export default Moviedetails;
