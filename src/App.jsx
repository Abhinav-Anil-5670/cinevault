import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Trending from "./templates/Trending"
import Popular from "./templates/Popular"
import Movie from "./templates/Movie"
import TvShows from "./templates/TvShows"
import People from "./templates/People"
import Moviedetails from "./templates/Moviedetails"
import Peopledetails from "./templates/Peopledetails"
import Tvdetails from "./templates/Tvdetails"


const App = () => {
  return (
    
      <div className=" bg-[#1F1E24] w-screen h-screen  flex">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/trending' element={<Trending/>  }/>
          <Route path='/popular' element={<Popular/>  }/>
          <Route path='/movie' element={<Movie/>  }/>
          <Route path='/movie/details/:id' element={<Moviedetails/>}/>
    
          
          
          <Route path='/tvshows' element={<TvShows/>  }/>
          <Route path='/tv/details/:id' element={<Tvdetails/>}/>
          
          <Route path='/people' element={<People/>  }/>
          <Route path='/people/details/:id' element={<Peopledetails/>}/>
          
        </Routes>
       
      </div>
       
    
  )
}

export default App