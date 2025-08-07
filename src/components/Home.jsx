import React from 'react'
import SideNav from '../templates/SideNav'

const Home = () => {
    document.title='Home'
  return (
    
    <>
      <SideNav/>
      <div className='w-[80%] h-full bg-blue'></div>
    </>
  )
}

export default Home