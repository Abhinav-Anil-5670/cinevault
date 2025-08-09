import React, { useEffect, useState } from "react";
import SideNav from "../templates/SideNav";
import TopNav from "../templates/TopNav";
import axios from "../utils/axios";
import Header from "../templates/Header";
import HorizontalCard from "../templates/HorizontalCard";
import DropDown from "../templates/DropDown";

const Home = () => {
  document.title = "Cinevault | Home";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const GetheaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(randomdata);
    } catch (err) {
      console.log(err);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      settrending(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !wallpaper && GetheaderWallpaper();
    GetTrending();
  }, [category]);
  console.log(wallpaper);

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />
        <div className="p-10 flex justify-between ">
          <h1 className="text-2xl text-zinc-400 font-semibold">Trending</h1>
          <DropDown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setcategory(e.target.value)} />
        </div>
        <HorizontalCard data={trending} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default Home;
