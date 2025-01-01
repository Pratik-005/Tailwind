import React from 'react'
import buildings from '../assets/buildings.png'

const About = () => {
    return (
        <div className="flex items-center justify-center container flex-col p-14 md:px-20 lg:px-32 w-full overflow-hidden" id='about' >
            <h1 className='text-2xl sm:text-4xl  mb-2 ' >About <span className='underline underline-offset-4 decoration-1  font-light' >our brand</span></h1>
            <p className='text-gray-400 max-w-80 text-center ' >Passionate About Propeties ,Dedicated to your vision</p>

            <div className="flex-col flex md:flex-row items-center md:items-start md:gap-20">
                <img src={buildings} className='w-full sm:w-1/2 size-[500px]' />
                <div className="flex flex-col items-center md:items-start  text-gray-600">
                    <div className=" mt-20 grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                        <div>
                            <p className='text-4xl font-medium text-gray-800' >10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800' >12+</p>
                            <p>Projets Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800' >20+</p>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800' >25+</p>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className='py-8 max-w-lg' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eum eaque autem totam maiores sunt obcaecati, in quas corrupti ut quisquam culpa quaerat quae fugiat quidem recusandae animi, suscipit optio.</p>

                    <button className='bg-blue-600 text-white px-8 py-2 rounded' >Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default About