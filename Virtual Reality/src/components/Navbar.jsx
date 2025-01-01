import { React, useState } from 'react'
import logo from '../assets/logo.png'
import { navItems} from '../constants'
import { Menu, X } from 'lucide-react'


function Navbar() {

    const [open, setopen] = useState(false);

    const toggleDrawer = () => setopen(!open)

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutal-700/80">
            <div className="container px-4 lg:px-16 relative mx-auto  lg:text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className='size-12 mr-2' src={logo} alt='logo' />
                        <span className='text-xl tracking-tight' >
                            VirtualR
                        </span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                        >
                            Create an account
                        </a>
                    </div>

                    <div className="lg:hidden md:flex  flex-col justify-end">
                        <button className='flex items-center' onClick={toggleDrawer} >
                            {open ? <X /> : <Menu />}
                        </button>
                    </div>

                </div>

                {
                    open &&
                    <div className="fixed right-0 top-20 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        {navItems.map((item, index) => (
                            <li className="py-4 list-none" key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </div>
                }

            </div>

        </nav>
    )
}

export default Navbar
