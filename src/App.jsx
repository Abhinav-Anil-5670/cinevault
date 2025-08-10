import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Trending from "./templates/Trending"
import Popular from "./templates/Popular"
import Movie from "./templates/Movie"
import TvShows from "./templates/TvShows"
import People from "./templates/People"

const App = () => {
  return (
    
      <div className=" bg-[#1F1E24] w-screen h-screen  flex">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/trending' element={<Trending/>  }/>
          <Route path='/popular' element={<Popular/>  }/>
          <Route path='/movie' element={<Movie/>  }/>
          <Route path='/tvshows' element={<TvShows/>  }/>
          <Route path='/people' element={<People/>  }/>
        </Routes>
       
      </div>
       
    
  )
}

export default App