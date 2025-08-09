import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const HorizontalCard = ({ data }) => {
  return (
    
      
      <div className="w-[100%] flex  overflow-y-hidden p-5 mb-5">
        {data.map((d, i) => {
          return (
            <div key={i} className="min-w-[15%]  mr-5 h-full  ">
              <img className="w-full h-[55%] object-cover"
                src={`https://image.tmdb.org/t/p/original/${
                  d.backdrop_path || d.poster_path
                }`}
                alt=""
              />
              <h1 className=" text-xl font-black text-white">
                {d.title || d.name || d.original_name || d.original_title}
              </h1>
              <p className="mt-3  text-white">
                {d.overview.slice(0, 100)}...
                <Link className="text-blue-500">more</Link>
              </p>
            </div>
          );
        })}
      </div>
   
  );
};

export default HorizontalCard;
