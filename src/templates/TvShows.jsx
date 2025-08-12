import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../utils/axios";
import TopNav from "./TopNav";
import DropDown from "./DropDown";
import Card from "./Card";
import Loading from "../components/Loading";

const TvShows = () => {
  document.title = "Cinevault | TV Shows";
  const Navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tvshow, setvshow] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTvshow = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        setvshow((prevstate) => [...prevstate, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshHandler = () => {
    if (tvshow.length === 0) {
      GetTvshow();
    } else {
      setpage(1);
      setvshow([]);
      GetTvshow();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);


  return tvshow.length > 0 ? (
    <div className="w-screen min-h-screen  ">
      <div className=" px-[5%] flex items-center justify-between  w-full">
        <h1 className="text-2xl text-zinc-400 font-semibold ">
          <i
            onClick={() => Navigate(-1)}
            className=" hover:text-[#6556CD]  ri-arrow-left-line"
          ></i>
          TV Shows
          <small className=" ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[70%]">
          <TopNav />
          <DropDown
            title="Category"
            options={["top_rated", "popular", "on_the_air", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tvshow.length}
        loader={<Loading />}
        next={GetTvshow}
        hasMore={hasMore}
      >
        <Card data={tvshow} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TvShows;
