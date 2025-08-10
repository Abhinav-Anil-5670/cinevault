import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TopNav from './TopNav'
import DropDown from './DropDown'
import axios from '../utils/axios'
import Card from './Card'
import Loading from '../components/Loading'

const Trending = () => {
    const Navigate = useNavigate()
    const [category, setcategory] = useState("all")
    const [duration, setduration] = useState("day")
    const [trending, settrending] = useState(null)

    const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);

      settrending(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  

  useEffect(()=>{
    GetTrending()
  },[category,duration])
  return trending ? (
    <div className='w-screen h-screen px-[3%] overflow-hidden overflow-y-auto'>
        <div className='flex items-center justify-between  w-full'>
            
            <h1 className='text-2xl text-zinc-400 font-semibold '>
                <i onClick={()=>Navigate(-1)} className=" hover:text-[#6556CD]  ri-arrow-left-line"></i> Trending
            </h1>
            <div className='flex items-center w-[70%]'>
                <TopNav/>
                <DropDown title="Category" options={["movie",'tv','all']} func={(e)=>setcategory(e.target.value)}/>
                <div className='w-[2%]'></div>
                <DropDown title="Duration" options={["week",'day']} func={(e)=>setduration(e.target.value)}/>
            </div>

            
        </div>
        <Card data={trending} title={category}/>
    </div>
  ) : <Loading/>
}

export default Trending