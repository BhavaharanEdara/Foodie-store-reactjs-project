import React from 'react'
import {AiOutlineMinusCircle,AiOutlinePlusCircle} from 'react-icons/ai'
import { addItem,removeItem } from '../Constants/cartSlice';
import { useDispatch } from 'react-redux';

function CartItem(props) {
    const dispatch = useDispatch();

    function handleAddtem(){
        
        dispatch(addItem(props.data));
    }

    function handleRemoveItem(){
        dispatch(removeItem(props.data));
    }

  return (
    <div className=' my-10 py-5 md:mx-40 bg-white rounded-2xl flex justify-around '>
        <div className='text-center'>
            <img className = "w-36  object-fit"  src = {props.data.img} alt = ""/>
            <h1 className='text-xl font-semibold mt-5'>{props.data.name}</h1>
        </div>
      <div className='text-center'>
        <div className='flex gap-10'>

            <AiOutlineMinusCircle className='text-5xl my-5 rounded-full shadow-xl p-2 text-red-500 hover:text-white hover:bg-red-500 hover:cursor-pointer' onClick={handleRemoveItem}/>
            <AiOutlinePlusCircle className='text-5xl my-5 rounded-full shadow-xl p-2 text-red-500 hover:text-white hover:bg-red-500 hover:cursor-pointer' onClick={handleAddtem}/>
        
        </div>
        <p className='mt-10 p-4 rounded-2xl text-xl font-semibold text-white bg-orange-600'>₹ {props.data.price}</p>
      </div>
    </div>
  )
}

export default CartItem
