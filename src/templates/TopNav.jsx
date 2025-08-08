import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const TopNav = () => {
    const [query, setquery] = useState("")
  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[20%]'>
        <i class="ri-search-line text-zinc-400 text-3xl"></i>
        <input type="text" className='w-[50%] mx-10 p-5 text-xl outline:none border:none bg-transparent text-white' placeholder='Search Anything' onChange={(e)=>setquery(e.target.value)} value={query}/>
        {query.length > 0 && <i onClick={()=>setquery("")} class="ri-close-line text-zinc-400 text-3xl"></i>}

        <div className='absolute w-[50%] rounded max-h-[50vh] bg-zinc-300  top-[90%] overflow-auto'>
            {/* <Link className='p-10 bg-zinc-200 w-full flex justify-start items-center border-b-2 border-zinc-100 text-zinc-400 font-semibold hover:text-black hover:bg-zinc-300 duration-300'>
                <img src="" alt="" />
                <span>Hello</span>
            </Link> */}

            
        </div>
    </div>
  )
}

export default TopNav