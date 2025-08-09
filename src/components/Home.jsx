import React, { useEffect, useState } from 'react'
import SideNav from '../templates/SideNav'
import TopNav from '../templates/TopNav'
import axios from '../utils/axios'
import Header from '../templates/Header'

const Home = () => {
    document.title='Cinevault | Home'

    const [wallpaper, setwallpaper] = useState(null)

    const GetheaderWallpaper = async ()=>{
        try{
            const {data} = await axios.get(`/trending/all/day`)
            let randomdata = data.results[Math.floor(Math.random()*data.results.length)]
            setwallpaper(randomdata)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
      !wallpaper &&  GetheaderWallpaper()
    },[])
    console.log(wallpaper)
  return wallpaper? (
    
    <>
      <SideNav/>
      <div className='w-[80%] h-full'>
        <TopNav/>
        <Header data={wallpaper}/>
      </div>
    </>
  ) : <h1>Loading</h1>
}

export default Home