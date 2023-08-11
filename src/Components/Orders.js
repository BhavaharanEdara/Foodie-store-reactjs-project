import React from 'react'
import Category from './Category'
import ItemCard from './ItemCard'
import { useState,useEffect } from 'react'
import {db} from '../firebase.config'
import { doc, getDoc } from "firebase/firestore";


function Orders() {
  const [items,setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  
  async function fetchdata(setItems){
    const docRef = await doc(db, "foodie store",'CH5sJcNWL6hej0u0H1qm');
    const docSnap = await getDoc(docRef);
    await setItems(docSnap.data().Data);
    await setFilterItems(docSnap.data().Data);
  
  }

  useEffect(()=>{
    fetchdata(setItems)
  }
  ,[])
  return (
    <div className='p-5 md:p-16 font-sans bg-red-100 min-h-screen pt-16 w-screen'>
        <div >
            <div className='text-gray-800 font-medium text-3xl pt-5' >Our Hot Dishes</div>
            <hr className='bg-orange-500 h-1 w-[90px] mt-1'/>
        </div>
        <Category {...{ data:items, setData:setFilterItems }}/>
        <div className='w-full flex flex-wrap justify-center '>
          {filterItems.map((e)=>{
            return (<ItemCard data = {e} key={e.id}/>)})
          }
        </div>
    </div>
  )
}

export default Orders
