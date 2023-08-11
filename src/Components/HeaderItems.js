import React from 'react'
import { Link } from 'react-router-dom'
function HeaderItems({setOption}) {
  return (
    <div >
        <ul className=' px-10 text-center text-xl'>
            <Link to="/" onClick={()=>{setOption(false)}}><li className='text-black hover:text-red-400 pb-2 bg-white border-b border-gray-300' >Home</li></Link>
            <Link to="/menu" onClick={()=>{setOption(false)}}><li className='text-black hover:text-red-400 py-2 bg-white border-b border-gray-300'>Menu</li></Link>
            <Link to = "/about" onClick={()=>{setOption(false)}}><li className='text-black hover:text-red-400 py-2 bg-white border-b border-gray-300'>About Us</li></Link>
        </ul>
    </div>
                    
  )
}

export default HeaderItems
