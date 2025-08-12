import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../utils/axios";
import TopNav from "./TopNav";
import DropDown from "./DropDown";
import Card from "./Card";
import Loading from "../components/Loading";

const Movie = () => {
  document.title = "Cinevault | Movies";
  const Navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setmovie((prevstate) => [...prevstate, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setpage(1);
      setmovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);


  return movie.length > 0 ? (
    <div className="w-screen min-h-screen  ">
      <div className=" px-[5%] flex items-center justify-between  w-full">
        <h1 className="text-2xl text-zinc-400 font-semibold ">
          <i
            onClick={() => Navigate(-1)}
            className=" hover:text-[#6556CD]  ri-arrow-left-line"
          ></i>
          Movie <small className=" ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[70%]">
          <TopNav />
          <DropDown
            title="Category"
            options={["popular", "top_rated",'upcoming',"now_playing"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        loader={<Loading />}
        next={GetMovie}
        hasMore={hasMore}
      >
        <Card data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
