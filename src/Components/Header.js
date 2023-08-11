import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import {MdShoppingCart} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {FaBars} from 'react-icons/fa'
import { useState } from 'react';
import HeaderItems from './HeaderItems';

function Header(){

    const cartItems = useSelector(store => store.cart.items);
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="font-sans fixed z-50 bg-white top-0 shadow-md h-16 w-full ">
            {/*desktop*/}
            <div className="hidden md:flex justify-between p-5 px-10">
                <Link to="/">
                    <div className='flex justify-around items-center gap-4 subpixel-antialiased	'>
                        <img className='w-10 object-cover' src ={Logo} alt="img"/>
                        <h1 className='font-bold text-orange-400 text-3xl h-5 pb-12'>Foodie Store</h1>
                    </div>
                </Link>
                <div className='flex justify-between items-center' >
                   <ul className='flex gap-8 px-10  items-center  justify-between text-xl'>
                    <Link to="/"><li className='text-black hover:text-red-400 '>Home</li></Link>
                    <Link to="/menu"><li className='text-black hover:text-red-400 '>Menu</li></Link>
                    <Link to = "/about"><li className='text-black hover:text-red-400 '>About Us</li></Link>
                    </ul>
                    <Link to="/cart"><div className="flex items-center relative">
                        <MdShoppingCart className=' text-3xl '/>
                        <p className='absolute -top-4 left-4 w-5 h-5  text-base flex flex-col justify-center text-center text-white bg-red-600 m-1 rounded-full'>{cartItems.length}</p>
                    </div></Link>
                    <div className='flex items-center ml-8 ' >
                        <img className='w-10 h-12 min-w-[40px] min-h-[40px]  pb-2' src={Avatar} alt="img" />        
                    </div>
                </div>
                
            </div>
            {/*mobile*/}
            <div className=' md:hidden w-screen h-full '>            
                <div className="flex  p-5">
                    <FaBars className='w-10 font-bold text-3xl pl-5' onClick={()=>{setShowOptions(!showOptions)}}/>
                    <div className='w-full flex justify-center'>
                        <Link to="/"><img className="w-14 h-14" src={Logo} alt="logo"/></Link>
                    </div>
                    <Link to="/cart"><div className="flex items-center relative pr-2">
                        <MdShoppingCart className=' text-3xl'/>
                        <p className='absolute -top-4 left-4 w-5 h-5  text-base flex flex-col justify-center text-center text-white bg-red-600 m-1 rounded-full'>{cartItems.length}</p>
                    </div></Link>
                    
                </div>
                {showOptions ? <HeaderItems setOption = {setShowOptions}/> : <></>}
            
            
            </div>

        </div>
    );

}

export default Header;