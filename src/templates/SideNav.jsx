import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-200 p-10 '>
        <h1 className='text-2xl text-[white] font-bold  '>
            <i class=" text-[#6556CD] ri-tv-fill mr-2 "></i>
            <span >Movie APP</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
            <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="ri-fire-line"></i>Trending</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="ri-bard-line"></i> Popular</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="ri-movie-line"></i> Movies</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="ri-tv-2-line"></i> Tv Shows</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="ri-team-fill"></i> People</Link>
        </nav>
        <hr className='border-none h-[1px] bg-zinc-400' />
        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
            <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information</h1>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="ri-fire-line"></i> About CineVault</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="ri-information-line"></i> Contact Us</Link>
            
        </nav>
    </div>
  )
}

export default SideNav