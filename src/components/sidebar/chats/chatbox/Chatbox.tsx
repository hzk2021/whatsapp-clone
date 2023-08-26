import React from 'react'
import Conversation from './Conversation'
import Header from './Header'
import Input from './Input'

function Chatbox() {
    return (
        <div className='flex flex-col h-full border-l border-solid'>
            <Header />

            <Conversation />


            <div className=''>
                <Input />
            </div>
        </div>
    )
}

export default Chatbox