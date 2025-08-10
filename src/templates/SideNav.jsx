import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 1024) { 
      setIsOpen(false)
    }
  }, [])

  return (
    <>
      
      <button 
        className="absolute top-4 left-4 z-50 lg:hidden text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </button>

      
      <div className={`fixed lg:static top-0 left-0 h-full border-r-2 border-zinc-200 p-10 bg-[#1F1E24] transition-transform duration-300 z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 w-[70%] sm:w-[50%] lg:w-[20%]`}>
        
        
        <h1 className='text-2xl text-[white] font-bold'>
          <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
          <span>Movie APP</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
          <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
          <Link to='/trending' className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'><i className="ri-fire-line"></i> Trending</Link>
          <Link to='popular' className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'><i className="ri-bard-line"></i> Popular</Link>
          <Link to='movie' className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'><i className="ri-movie-line"></i> Movies</Link>
          <Link to='/tvshows' className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'><i className="ri-tv-2-line"></i> Tv Shows</Link>
          <Link to='/people' className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'><i className="ri-team-fill"></i> People</Link>
        </nav>
        <hr className='border-none h-[1px] bg-zinc-400' />
        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
          <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information</h1>
          <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'><i className="ri-fire-line"></i> About CineVault</Link>
          <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'><i className="ri-information-line"></i> Contact Us</Link>
        </nav>
      </div>
    </>
  )
}

export default SideNav
