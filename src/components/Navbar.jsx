// import React from 'react';

// const Navbar = () => {
//     // const [isopen, setIsOpen] = useState(false);

//     // const buttonClasses = "text-grey-100 font-bold text-sm px-2 py-1 border-2 border-grey-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300         "
//     // const buttons = (
//     //     <>
//     //         <button className={buttonClasses}>blog</button>
//     //         <button className={buttonClasses}>blog</button>
//     //         <button className={buttonClasses}>blog</button>
//     //     </>
//     // )

//   return (
//    <nav className='bg-orange-600 text-black fixed w-full'>
//     <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='flex items-center justify-between h-16'>
//             <div className="flex flex-row w-full justify-between">
//                 <div className='text-xl font-bold'>
//                     {/* {buttons} */}
//                 </div>
//                 <div className="hidden md:block">
//                     <div className="flex ml-10 items-baseline space-x-2">
//                         {/* Nav Links */}
//                     </div>
//                 </div>
//             </div> 
//             <div className="md:hidden">
//                 <button onClick={()=>{setIsOpen(!isOpen)}} type="button" className="fill-gray-100"> 
//                 <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//               </svg>
//                 </button>
//             </div>
//         </div>
//     </div>
//     {/* {
//         isOpen && (
//             <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2">
//                 {buttons}
//             </div>
//         )
//     } */}
//    </nav>
//   )
// }

// export default Navbar;

import React, { useState } from 'react'
import logo from '../assets/swiftlogo.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
      <header className='flex justify-between items-center text-black py-4 px-8 md: px-32 bg-orange-600'>
        <a href="#">
            <img src={logo} alt="swiftransact-logo" className='w-12 hover:scale-105 rounded-xl transition-all' />
        </a>
        <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
            <li className='p-3 hover:bg-neutral-800 hover:text-white rounded-md transition-all cursor-pointer'>Cryptocurrencies</li>
            <li className='p-3 hover:bg-neutral-800 hover:text-white rounded-md transition-all cursor-pointer'>Community</li>
            <li className='p-3 hover:bg-neutral-800 hover:text-white rounded-md transition-all cursor-pointer'>Products</li>
        </ul>
        <div className='relative hidden md:flex items-center justify-center gap-3'>
          <i className='bx bx-search text-2xl text-gray-500'>
            <input type="text" placeholder='search' className=' pl-2 rounded-xl border-2 border-neutral-800 focus:bg-slate-100 focus:outline-neutral-900' />
          </i>
        </div>
        <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex-col items-center gap-6 font-semibold text-lg transform transition-transform 
          ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
          >
            <li className='list-none w-full text-center p-4 hover:bg-neutral-800 hover:text-white transition-all cursor-pointer'>Cryptocurrencies</li>
            <li className='list-none w-full text-center p-4 hover:bg-neutral-800 hover:text-white transition-all cursor-pointer'>Community</li>
            <li className='list-none w-full text-center p-4 hover:bg-neutral-800 hover:text-white transition-all cursor-pointer'>Products</li>
        </div>
      </header>
    </div>
  )
}

export default Navbar;