import React from 'react'
function DisplayItem({
    img,
    Title,
    Price,
    Rating
}) {
  return (
    <div className='lg:w-48 lg:h-52 lg:mx-3 lg:my-10 xl:w-48 xl:h-52 m-5 w-48 h-52  text-center backdrop-blur-2xl drop-shadow-lg bg-white bg-opacity-50 xl:m-10 relative rounded-3xl shadow-xl '>
        <img className='w-9/12 absolute left-5 -top-10' src={img} alt=""/>
        <h1 className='pt-28 font-bold text-lg text-gray-700'>{Title}</h1>
        <p className='text-sm font-medium'><span className='text-red-500 font-bold'>$</span>{Price}</p>
        <p>{Rating} ★</p>
    </div>
  )
}

export default DisplayItem

