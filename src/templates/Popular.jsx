import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../utils/axios";
import TopNav from "./TopNav";
import DropDown from "./DropDown";
import Card from "./Card";
import Loading from "../components/Loading";



const Popular = () => {
    document.title = "Cinevault | Popular"
  const Navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);


      if (data.results.length > 0) {
        setpopular((prevstate) => [...prevstate, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setpopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen min-h-screen  ">
      <div className=" px-[5%] flex items-center justify-between  w-full">
        <h1 className="text-2xl text-zinc-400 font-semibold ">
          <i
            onClick={() => Navigate(-1)}
            className=" hover:text-[#6556CD]  ri-arrow-left-line"
          ></i>{" "}
          Popular
        </h1>
        <div className="flex items-center w-[70%]">
          <TopNav />
          <DropDown
            title="Category"
            options={["movie", "tv"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        loader={<Loading />}
        next={GetPopular}
        hasMore={hasMore}
      >
        <Card data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
