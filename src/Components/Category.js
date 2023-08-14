import React from 'react'
import {IoFastFood} from 'react-icons/io5'
import { useState } from 'react'
import {catData} from '../Constants/catData'

function Categorycomp({
  category,
  title,
  id,
  setFilter,
  filter,
  items, setItems

}) {
  function filterData(items, itemCategory){

    const fdata = items.filter((e)=> e.cat.includes(itemCategory));
    return fdata;
  }
  return (
    <div key = {id}  className={`${category === filter ? "bg-red-600" : "bg-white"}  group flex flex-col items-center shadow-xl w-24 h-28 min-w-[94px] justify-center 	 rounded-xl  hover:bg-red-600  hover:cursor-pointer`} onClick={()=>{
      setFilter(category);
      setItems(filterData(items, category))
    }
      }>

      <IoFastFood className={`${category===filter ? "bg-white text-gray-800": "bg-red-600 text-white"} bg-red-600  w-10 h-10 p-3  rounded-full group-hover:text-gray-800 group-hover:bg-white ` }/>
      <h1 className={`${category===filter ? " text-white": "text-gray-800 "} text-sm font-normal pt-2 group-hover:text-white `}>{title}</h1>
    </div>
  )
}

function Category({data, setData}){
  const [activeCategeory, setActiveCategory] = useState("");

  return(
    <div className=' overflow-hidden'>
    <div className='w-full flex items-center justify-start lg:justify-center gap-6 py-6 overflow-x-scroll object-fill no-scrollbar'>
          {catData.map((e)=>{
            return <Categorycomp {...{...e, setFilter:setActiveCategory, filter:activeCategeory, items : data, setItems : setData}} key={e.id} />
          })
        }
    </div>
    </div>
        
  )
}
export default Category
