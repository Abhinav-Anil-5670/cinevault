import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = ({data}) => {
  const { info } = useSelector((state) => state.movie);

// Safely find the trailer key from the full video list
const videos = info?.videos?.results;
const officialTrailer = videos?.find((video) => video.type === "Trailer");
const key = officialTrailer?.key || videos?.[0]?.key;
  return (
    <div
  className="w-full h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] flex flex-col justify-end items-start p-[5%]"
  style={{
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.2), 
      rgba(0,0,0,0.5), 
      rgba(0,0,0,0.7)
    ), url(https://image.tmdb.org/t/p/original/${
      data.backdrop_path || data.poster_path
    })`,
    backgroundPosition: 'top 20%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }}
>
    <h1 className='w-[70%] text-5xl font-black text-white'>{data.title || data.name || data.original_title || data.original_name}</h1>
    <p className='mt-3 w-[70%] text-white'>{data.overview.slice(0,200)}...<Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-500' >more</Link></p>
    <p className='text-white '>
        <i class="ri-megaphone-line text-yellow-400"></i> {data.release_date || "No Information"}
        <i class=" ml-5 ri-dvd-line text-yellow-400"></i> {data.media_type.toUpperCase()}

    </p>
    
</div>

  )
}

export default Header