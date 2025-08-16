import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../utils/axios'
import noimage from '/noimage.jpg'


const TopNav = () => {
    const [query, setquery] = useState("")
    const [search, setsearch] = useState(null)
    const getSearch = async ()=>{
        try{
            const {data} = await axios.get(`/search/multi?query=${query}`)
            
            setsearch(data.results)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getSearch()
    },[query])
    
  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center p-5 '>
        <i class="ri-search-line text-zinc-400 text-3xl"></i>
        <input type="text" className='w-[50%] mx-10 p-5 text-xl outline:none border:none bg-transparent text-white' placeholder='Search Anything' onChange={(e)=>setquery(e.target.value)} value={query}/>
        {query.length > 0 && <i onClick={()=>setquery("")} className="ri-close-line text-zinc-400 text-3xl"></i>}

        <div className='z-[100] absolute w-[50%] rounded max-h-[50vh] bg-zinc-300  top-[100%] overflow-auto left-[5.1%] '>
            {search?.map((s,i)=>{
                return <Link to={`/${s.media_type || title }/details/${s.id}`} key={i} className='p-10 bg-zinc-200 w-full flex justify-start items-center border-b-2 border-zinc-100 text-zinc-400 font-semibold hover:text-black hover:bg-zinc-300 duration-300'>
                <img className='w-[10vh] h-[15vh] object-cover rounded mr-10' src={ s.poster_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.poster_path || s.profile_path}`:noimage} alt="" />
                <span>{s.title || s.name || s.original_title || s.original_name}</span>
            </Link>
            })}
            

            
        </div>
    </div>
  )
}

export default TopNav