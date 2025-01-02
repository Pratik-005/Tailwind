import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img1 from '../assets/projects/img1.jpg'
import img2 from '../assets/projects/img2.jpg'
import img3 from '../assets/projects/img3.jpg'
import img4 from '../assets/projects/img4.jpg'
import img5 from '../assets/projects/img6.jpg'
import img6 from '../assets/projects/img6.jpg'


const Projects = () => {

    const [currIndex, setCurrIndex] = useState(0);
    const [cardsToshow, setCardsToshow] = useState(1)

    const totalImges = 6;

    const nextProj = () => {
        setCurrIndex((prev) => ((prev + 1) % totalImges))
    }

    const prevProj = () => {
        setCurrIndex((prev) => (prev === 0 ? totalImges - 1 : prev - 1))
    }

    useEffect(() => {
        const updateCardsToshow = () => {
            if (window.innerWidth > 1024) {
                setCardsToshow(totalImges)
            } else {
                setCardsToshow(1)
            }
        }
        updateCardsToshow();

        window.addEventListener('resize', updateCardsToshow);

        return () => {
            window.removeEventListener('resize', updateCardsToshow)
        }
    }, [])

    return (
        <div className="container py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" i="projects" >
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center ' >Projects <span className='underline underline-offset-4 decoration-1 under font-light ' >Completed</span></h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto' >
                Craftting Spaces, Building Legacies-Explore our portfolio
            </p>

            <div className='flex items-center justify-end mb-8' >
                <button onClick={prevProj} className='p-3 bg-gray-300 rounded mr-2  ' >
                    <ArrowBackIosIcon />
                </button>
                <button onClick={nextProj} className='p-3 bg-gray-300 rounded mr-2  ' >
                    <ArrowForwardIosIcon />
                </button>
            </div>

            <div className='overflow-hidden' >
                <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currIndex * 100) / cardsToshow}%)` }}  >

                    <div className='relative  flex-shrink-0 w-full sm:w-1/4 overflow-hidden rounded'   >
                        <img src={img1} className='w-full  h-full bg-cover max-h-96' />
                        <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                            <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md ">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Title
                                </h2>
                                < p className='text-gray-500 text-sm' >Project Price <span>|</span> Project Location</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative flex-shrink-0 w-full sm:w-1/4 overflow-hidden rounded'  >
                        <img src={img2} className='w-full  h-full bg-cover max-h-96' />
                        <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                            <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md ">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Title
                                </h2>
                                < p className='text-gray-500 text-sm' >Project Price <span>|</span> Project Location</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative flex-shrink-0 w-full sm:w-1/4 overflow-hidden rounded'  >
                        <img src={img3} className='w-full max-h-96 h-full bg-cover' />
                        <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                            <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md ">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Title
                                </h2>
                                < p className='text-gray-500 text-sm' >Project Price <span>|</span> Project Location</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative flex-shrink-0 w-full sm:w-1/4 overflow-hidden rounded'  >
                        <img src={img4} className='w-full max-h-96 h-full bg-cover' />
                        <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                            <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md ">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Title
                                </h2>
                                < p className='text-gray-500 text-sm' >Project Price <span>|</span> Project Location</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative flex-shrink-0 w-full sm:w-1/4 overflow-hidden rounded'  >
                        <img src={img5} className='w-full  h-full bg-cover max-h-96' />
                        <div className="absolute left-0 right-0 bottom-5  flex justify-center">
                            <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md ">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Title
                                </h2>
                                < p className='text-gray-500 text-sm' >Project Price <span>|</span> Project Location</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative flex-shrink-0 w-full sm:w-1/4 overflow-hidden rounded'  >
                        <img src={img6} className='w-full max-h-96 h-full bg-cover' />
                        <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                            <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md ">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Title
                                </h2>
                                < p className='text-gray-500 text-sm' >Project Price <span>|</span> Project Location</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Projects

