import React from 'react'
import Delivery from '../img/delivery.png';
import OrangeBg from '../img/orangebg.png';
import DisplayItem from './DisplayItem';
import {displayData} from '../Constants/displayData';
import { Link } from 'react-router-dom';


function Body() {
    
  return (
        <div className=' w-full min-h-screen lg:flex lg:justify-between md:mt-8 mt-20  '>
            <div className='lg:w-1/2 sm:pt-20 p-10 lg:p-20'>
                <div className=' mb-5 text-l w-[170px] text-orange-500 font-bold bg-orange-100 flex items-center rounded-full h-10'>
                    <h1 className='ml-5'>Bike Delivery</h1>
                    <img className="w-8 px-1 mr-3 ml-2 mt-1 bg-white rounded-full shadow-md" src={Delivery} alt =""/>
                </div>
                <p className='text-7xl leading-[6.5rem] font-bold'>The Fastest Delivery in <span className='text-7xl font-bold text-orange-500'>Your City</span></p>
                <p className='text-xl font-sans text-gray-700 pt-5'>We are here to help you live life the panda way. Spend more time doing what you love  we will take care of tasty meals, fresh groceries and new flavours.</p>
                <Link to="/menu"><button className='text-white font-sans font-semibold mt-16 w-32 bg-orange-500 px-3 py-2 rounded-md '>Order now</button></Link>

            </div>
            <div className='hidden lg:flex w-1/2  justify-center pt-20 pb-10 relative'>
                <img className=' object-cover h-4/12 pr-16' src={OrangeBg} alt = "backimg"/>
                <div className='  w-11/12 absolute top-20 left-0 flex flex-wrap justify-around gap-5'>
                    {displayData.map((a)=>{
                        return(<DisplayItem {...a}/>)
                    })}
                </div>
            </div>
        </div>
  )
}

export default Body
