import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-200 p-10 '>
        <h1 className='text-2xl text-[white] font-bold  '>
            <i class=" text-[#6556CD] ri-tv-fill mr-2 "></i>
            <span >Movie APP</span>
        </h1>
        <nav>
            <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
            <Link></Link>
        </nav>
    </div>
  )
}

export default SideNav