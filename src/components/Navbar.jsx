import { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'

const Navbar = () => {
   const [nav, setNav] = useState(false)
   const [black, setBlack] = useState(false)
   return (
      <>
         <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left side */}
            <div className="flex items-center">
               <div className='cursor-pointer'>
                  <AiOutlineMenu onClick={() => setNav(!nav)} size={30} />
               </div>
               <div className='flex items-center'>
                  <h1 className=' text-2xl sm:text-3xl lg:text-4xl px-2 '>
                     Best <span className='font-bold'>Eats</span>
                  </h1>
                  <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text[14px] ' onClick={() => setBlack(!black)} >
                     <p className={black ? 'p-2' : 'bg-black text-white rounded-full p-2'}>Delivery</p>
                     <p className={black ? 'bg-black text-white rounded-full p-2': 'p-2'}>Pickup</p>
                  </div>
               </div>
            </div>
            {/* Search Input */}
            <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w[500px]'>
               <AiOutlineSearch size={35} className='px-1'/>
               <input
                  className='bg-transparent p-2 w-full focus:outline-none'
                  type="text"
                  placeholder="Search foods" />
            </div>
            {/* Cart Button */}
            <button className='hidden items-center bg-black text-white rounded-full md:flex py-2 '>
               <BsFillCartFill size={20} className='mr-2' /> Cart
            </button>
         </div>
         {/* Mobile Menu */}
         {/* Overlay */}
         <div className={nav ?'bg-black/80 fixed w-full h-screen z-10 left-0 top-0 duration-500' : ' ' }></div>
         {/* Side Menu */}
         <div className={nav ? 'bg-white w-[300px] h-screen fixed z-10 top-0 left-0 duration-300' :'bg-white w-full h-screen fixed z-10 top-0 left-[-100%] duration-300'}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4'>
               Best <span className='font-bold'>Eats</span>
            </h2>
            <nav>
               <ul className='flex flex-col p-4 text-gray-800'>
                  <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                  <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                  <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                  <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                  <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                  <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                  <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
               </ul>
            </nav>
         </div>
      </>
   )
};

export default Navbar;
