import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'


function Main() {
    return (
        <div className='main-wrapper h-screen flex'>
            <div className='flex w-10/12 h-[95%] m-auto shadow-2xl bg-[#A8DF8E]'>

                <div className='outline w-[25%] relative'>
                    <Sidebar />
                </div>

                {/* <div className='w-[75%]'>chat</div> */}

            </div>
        </div>
    )
}

export default Main