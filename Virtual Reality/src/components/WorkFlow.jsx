import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImg from '../assets/code.jpg'
import { checklistItems } from '../constants'

const WorkFlow = () => {
    return (
        <div className="mt-20">
            <h2 className='text-3xl sm:text-4xl lg:text-5xl text-center mt-6 mb-6 tracking-wide' >Accelerate your
                <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text' > coding workflow</span>
            </h2>
            <div className="flex-col flex justify-center-flex-wrap lg:flex-row ">
                <div className="flex p-2 w-full lg:w-1/2">
                    <img src={codeImg} />
                </div>
                <div className="w-full lg:w-1/2 pt-12">
                    {
                        checklistItems.map((item, index) => (
                            <div key={index} className='mb-12 flex' >
                                <div className="text-green-400 mx-6  bg-neutral-900 size-10 p-2 rounded-full justify-center items-center ">
                                    <CheckCircle2 />
                                </div>
                                <div >
                                    <h2 className='mt-1 mb-2 text-lg' >{item.title}</h2>
                                    <p className='text-md text-neutral-500' >{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkFlow