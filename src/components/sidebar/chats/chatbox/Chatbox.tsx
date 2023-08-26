import React from 'react'
import Conversation from './Conversation'
import Header from './Header'
import Input from './Input'

function Chatbox() {
    return (
        <div className='p-2 px-4 flex flex-col h-full'>
            <Header />

            <div className='grow p-2 m-2 overflow-y-scroll'>
                <Conversation />

            </div>

            <div className=''>
                <Input />
            </div>
        </div>
    )
}

export default Chatbox