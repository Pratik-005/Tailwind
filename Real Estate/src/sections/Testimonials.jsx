import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'motion/react';


const Testimonials = () => {

    const testimonials = [
        {
            name: "John Doe",
            title: "Homeowner",
            desc: "Buying our dream home was such a smooth process, thanks to this amazing team. Their professionalism and attention to detail made all the difference.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Jane Smith",
            title: "First-Time Buyer",
            desc: "As a first-time buyer, I was nervous about the process. The agents guided me every step of the way and helped me find the perfect home within my budget!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Samuel Green",
            title: "Investor",
            desc: "I’ve worked with many agencies, but this one stands out for their market expertise. They helped me secure multiple profitable properties efficiently.",
            rating: 4.5,
            image: "https://randomuser.me/api/portraits/men/54.jpg"
        },
    ];

    return (
        <motion.div initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className='container  py-10 lg:px-32 w-full overflow-hidden' id='testimonials' >
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center ' >
                Customer <span className='underline underline-offset-2 under decoration-1 font-light' >Testimonials</span>
            </h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto' >
                Real Stories From Those Who Found Home With Us
            </p>

            <div className='flex flex-wrap justify-center gap-8' >
                {testimonials.map((item, index) => {
                    return (
                        <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center' >
                            <img src={item.image} className='size-20 rounded-full mx-auto mb-4' />
                            <h2 className='text-xl text-gray-700 font-medium' >{item.name}</h2>
                            <p className='text-gray-500 mb-4 text-sm' >{item.title}</p>
                            <div className='flex justify-center gap-1 text-red-500 mb-4' >
                                <StarIcon />
                            </div>
                            <p className='text-gray-600' >
                                {item.desc}
                            </p>
                        </div>
                    )
                })}
            </div>
        </motion.div>


    )
}

export default Testimonials