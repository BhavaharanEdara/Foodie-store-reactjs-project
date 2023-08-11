import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
function Cart() {
    const cartItems = useSelector(store => store.cart.items);
    let price = 0;
    cartItems.forEach(element => {
        price = price + parseInt(element.price);
    });
  return (
    <div className='min-h-screen  bg-red-200 pt-16 p-4 md:p-20'>
        <h1 className='text-2xl font-medium pl-3 pt-5 pb-2'>Your cart Items</h1>
        <hr className='mb-2 h-1 w-56 ml-3 bg-orange-500'/>
        
      {cartItems.length>0 ? cartItems.map((e,index)=>{
        return(<CartItem data = {e} key = {e.id+index}/>)
      }): <h1 className='p-10 text-xl font-bold text-center bg-white rounded-lg'>Cart is Empty ....</h1>}
      {cartItems.length>0 ?<h1 className='p-10 text-xl font-bold text-center bg-white rounded-lg'>Total : ₹ {price}</h1> : <></>}
    </div>
  )
}

export default Cart
