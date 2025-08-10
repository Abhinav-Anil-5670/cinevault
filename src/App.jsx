import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Loading from "./components/Loading"
import Trending from "./templates/Trending"
import Popular from "./templates/Popular"

const App = () => {
  return (
    
      <div className=" bg-[#1F1E24] w-screen h-screen  flex">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/trending' element={<Trending/>  }/>
          <Route path='/popular' element={<Popular/>  }/>
        </Routes>
       
      </div>
       
    
  )
}

export default App