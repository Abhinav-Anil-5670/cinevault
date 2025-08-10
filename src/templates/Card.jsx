import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, title }) => {
  console.log(data);
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
      {data.map((c, i) => {
        return (
          <Link className="w-[25vh] mr-[5%] mb-[5%]" key={i}>
            <img
              className="w-[40vh] h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] "
              src={`https://image.tmdb.org/t/p/original/${
                c.backdrop_path || c.poster_path || c.profile_path
              })`}
              alt=""
            />
            <h1 className="text-2xl mt-3 text-zinc-400">{c.title || c.name || c.original_name || c.original_title}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
