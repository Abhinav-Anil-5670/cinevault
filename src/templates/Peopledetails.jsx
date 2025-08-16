import React, { useEffect, useState } from "react";
import { asyncloadpeople, removepeople } from "../store/actions/peopleActions";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import HorizontalCard from "./HorizontalCard";
import Loading from "../components/Loading";
import DropDown from "./DropDown";

const Peopledetails = () => {
  const { info } = useSelector((state) => state.people);
  useEffect(() => {
    // Only try to set the title if the 'info' object and its properties exist
    if (info && info.detail && info.detail.name) {
      document.title = `Cinevault | ${info.detail.name}`;
    }
  }, [info]);
  const [category, setcategory] = useState("movie");

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(asyncloadpeople(id));
    return () => {
      dispatch(removepeople());
    };
  }, [id]);
  
  return info ? (
    <div className="px-[15%] w-screen flex flex-col bg-[#1F1E24] h-[150vh]">
      <nav className="h-[10vh] w-full text-zinc-100 flex gap-10 text-2xl items-center">
        <Link
          onClick={() => Navigate(-1)}
          className=" hover:text-[#6556CD]  ri-arrow-left-line"
        ></Link>

        <Link to="/">Home</Link>
      </nav>

      <div className="w-full flex ">
        <div className="w-[20%]">
          <img
            className="w-[40vh] h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] "
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path})`}
            alt=""
          />
          <hr className="mt-10 " />
          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-line"></i>
            </a>

            <a
              target="_blank"
              href={`https://facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-line"></i>
            </a>
          </div>
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Personal Info
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold ">Profession</h1>
          <h1 className=" text-zinc-400">{info.detail.known_for_department}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className=" text-zinc-400">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className=" text-zinc-400">{info.detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Deathday</h1>
          <h1 className=" text-zinc-400">
            {info.detail.deathday
              ? info.detail.deathday
              : "umm.... Still Alive"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Place of Birth
          </h1>
          <h1 className=" text-zinc-400">{info.detail.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Also Known As
          </h1>
          <h1 className=" text-zinc-400">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>
        <div className="w-[80%] ml-[5%]">
          <h1 className=" text-zinc-400 text-6xl font-extrabold">
            {info.detail.name}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold my-5">Overview</h1>
          <p className="text-zinc-400">{info.detail.biography}</p>

          <h1 className="text-lg text-zinc-400 font-semibold mt-5">
            Known For
          </h1>
          <HorizontalCard data={info.combinedCredits.cast} />
          <div className="w-full flex justify-between">
            <h1 className="text-lg text-zinc-400 font-semibold mt-5">
              Movies and TV Shows
            </h1>
            <DropDown
              title="category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
          <div className="w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,0.3)] mt-5 border-2 border-zinc-700 p-5 list-disc text-zinc-400 ">
            {info[category + "Credits"].cast.map((c, i) => (
              <li key={i} className="hover:text-white duration-300 cursor-pointer p-5">
                <Link to={`/${category}/details/${c.id}`} className="">
                  <span>
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>
                  <span className="block">{c.character && `Character Name : ${c.character}`}</span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Peopledetails;
