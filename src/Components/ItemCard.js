import React from 'react'
import {AiOutlineMinusCircle,AiOutlinePlusCircle} from 'react-icons/ai'
import { addItem,removeItem } from '../Constants/cartSlice';
import { useDispatch } from 'react-redux';

function ItemCard(
    props
) {
    const dispatch = useDispatch();

    function handleAddtem(){
        
        dispatch(addItem(props.data));
    }

    function handleRemoveItem(){
        dispatch(removeItem(props.data));
    }
    
  return (
    <div className='w-[300px] h-60 bg-white m-5 rounded-xl shadow-xl md:h-56 ' >    
        <div className='w-full sm:flex sm:flex-col md:flex-row md:ml-3 '>
        <div className='w-full md:w-1/2 h-28 flex flex-col justify-center items-center md:items-start md:justify-normal'>
            <img className="w-32 h-32  md:ml-4 object-scale-down" src={props.data.img} alt="hi"/>

        </div>
        <div className='w-full md:w-1/2  md:ml-0 '>
            <div className='flex  justify-center gap-5 '>
                <AiOutlineMinusCircle className='text-4xl md:text-5xl md:my-9 rounded-full shadow-xl p-2 text-red-500 hover:text-white hover:bg-red-500 hover:cursor-pointer' onClick={handleRemoveItem}/>
                <AiOutlinePlusCircle className='text-4xl md:text-5xl md:my-9 rounded-full shadow-xl p-2 text-red-500 hover:text-white hover:bg-red-500 hover:cursor-pointer' onClick={handleAddtem}/>
            </div>
            
        </div>
        
        </div>
        <div className='text-center md:m-4'>
            <h1 className='text-xl font-semibold'>{props.data.name}</h1>
            <p className='text-lg font-medium'><span className='text-red-500 font-bold'>₹</span> {props.data.price}</p>
            <p className='text-lg font-base md:pb-0 '><span className='text-yellow-500 font-bold'>★</span> {props.data.rating}</p>
        </div>
    </div>

    )
}

export default ItemCard
