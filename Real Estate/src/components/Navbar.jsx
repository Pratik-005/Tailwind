import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            if (open) {
                document.body.style.overflow = 'auto';
            }
        }

        return () => document.body.style.overflow = 'auto';
    })

    return (
        <div className="absolute top-0 left-0 w-full z-10">

            <div class="flex justify-between items-center mx-auto container py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <span className='flex gap-3 items-center' >
                    <img src={logo} className='size-10 rounded-lg ' />
                    <h4 className='text-3xl font-medium text-white' >Estate</h4>
                </span>
                <ul className='hidden gap-10  md:flex  text-white ' >
                    {['Home', 'About', 'Projects', 'Testimonials'].map((item, index) => (
                        <li key={index} className="cursor-pointer hover:text-gray-400">
                            <a href={`#${item.toLocaleLowerCase()}`} className="transition duration-300">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className='hidden lg:block bg-white px-8 py-2 rounded-full' >Signup</button>
                <span o className=' md:hidden text-white cursor-pointer'>
                    <MenuIcon onClick={() => setOpen(true)} />
                </span>
            </div>


            <div className={`md:hidden ${open ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`} >
                <span className='flex justify-end p-6 cursor-pointer' ><CloseIcon onClick={() => setOpen(false)} /></span>
                <ul className='  text-black  flex flex-col items-center gap-5 mt-10' >
                    {['Home', 'About', 'Projects', 'Testimonials'].map((item, index) => (
                        <li key={index} className="cursor-pointer hover:text-gray-400">
                            <a onClick={() => setOpen(false)} href={`#${item.toLocaleLowerCase()}`} className="transition duration-300">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


        </div >
    )
}

export default Navbar 