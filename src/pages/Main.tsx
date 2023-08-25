import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'

function Main() {
    return (
        <div className='main-wrapper h-screen flex
                        before:content-[""] before:w-full before:z-[-1] before:absolute before:h-full before:bg-[#F3FDE8]'>
            <div className='flex w-10/12 h-[95%] m-auto shadow-2xl bg-[#A8DF8E]'>

                <div className='outline grow-[0.2] relative'>
                    <Sidebar />
                </div>

                <div className='grow-[0.8]'>chat</div>

            </div>
        </div>
    )
}

export default Main