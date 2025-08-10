import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../utils/axios";
import TopNav from "./TopNav";
import DropDown from "./DropDown";
import Card from "./Card";
import Loading from "../components/Loading";


const People = () => {
    document.title = "Cinevault | People";
  const Navigate = useNavigate();
  
  const [people, setpeople] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const Getpeople = async () => {
    try {
      const { data } = await axios.get(`/person/popular`);

      if (data.results.length > 0) {
        setpeople((prevstate) => [...prevstate, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
  Getpeople(); 
}, []);

  return people.length > 0 ? (
    <div className="w-screen min-h-screen  ">
      <div className=" px-[5%] flex items-center justify-between  w-full">
        <h1 className="text-2xl text-zinc-400 font-semibold ">
          <i
            onClick={() => Navigate(-1)}
            className=" hover:text-[#6556CD]  ri-arrow-left-line"
          ></i>
          People
        </h1>
        <div className="flex items-center w-[70%]">
          <TopNav />
          
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={people.length}
        loader={<Loading />}
        next={Getpeople}
        hasMore={hasMore}
      >
        <Card data={people} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People