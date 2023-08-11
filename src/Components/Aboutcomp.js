import React from 'react'

function Aboutcomp(props) {
  return (
    <div className='bg-white rounded-xl m-8 shadow-xl'>
        <h1 className='text-2xl font-medium pl-3 pt-5 pb-2'>{props.heading}</h1>
        <hr className='mb-2 h-1 w-56 ml-3 bg-orange-500'/>
        <p className='text-lg pl-8 pb-5 font-normal'>{props.content}</p>
    </div>
  )
}

export default Aboutcomp
