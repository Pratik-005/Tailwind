import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from "motion/react"


const Header = () => {
    return (
        <div className="min-h-screen mb-8 bg-cover bg-center flex overflow-hidden items-center w-full bg-[url('assets/bg.png')]" id='header' >
            <Navbar />
            <motion.div initial={{ opacity: 0, y: 100 }} transition={{ duration: 1.5 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white ">
                <h2 className='text-5xl sm:text-6xl md:text[82px] inline-block max-w-3xl font-semibold pt-20'  >
                    Explore homes that fit your dream</h2>
                <div className='space-x-6 mt-16' >
                    <a className='border border-white px-8 py-3 rounded-md' href='#projects'>Projects</a>
                    <a className='  bg-blue-500 px-8 py-3 rounded-md' href='#contact'>Contact Us</a>
                </div>
            </motion.div>

        </div>
    )
}

export default Header