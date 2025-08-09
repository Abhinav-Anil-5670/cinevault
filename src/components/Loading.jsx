import React from 'react'
import loading from '/pattern-19336.gif'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black' >
        <img className='w-[50%]' src={loading} alt="" />
    </div>
  )
}

export default Loading