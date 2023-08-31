import React, { useContext } from 'react'
import { ChatContext } from '../../../../contexts/ChatContext';
import Conversation from './Conversation'
import Header from './Header'
import Input from './Input'

function Chatbox() {
    const chatContext = useContext(ChatContext);

    const displayName = chatContext!.data.userInfo?.displayName || "";
    const photoURL = chatContext!.data.userInfo?.photoURL || "";
    const chatId = chatContext!.data.chatId || "";

    return (
        <div className='flex flex-col h-full border-l border-solid'>

            {
                chatContext?.data.userInfo ?
                    <>
                        <Header displayName={displayName} photoURL={photoURL} />
                        <Conversation chatId={chatId} receiverPhotoURL={photoURL} />
                        <div className=''>
                            <Input />
                        </div>
                    </>
                    : null
            }


        </div>
    )
}

export default Chatbox