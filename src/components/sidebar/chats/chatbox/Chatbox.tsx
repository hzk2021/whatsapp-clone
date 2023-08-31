import { useContext } from 'react'
import { ChatContext } from '../../../../contexts/ChatContext';
import Conversation from './Conversation'
import Header from './Header'
import Input from './Input'
import whatsappImage from "../../../../assets/whatsapp.webp";

function Chatbox() {
    const chatContext = useContext(ChatContext);

    const displayName = chatContext!.data.userInfo?.displayName || "";
    const photoURL = chatContext!.data.userInfo?.photoURL || "";
    const chatId = chatContext!.data.chatId || "";

    return (
        <div className='flex flex-col h-full border-l border-solid border-gray-500'>

            {
                chatContext?.data.userInfo ?
                    <>
                        <Header displayName={displayName} photoURL={photoURL} />
                        <Conversation chatId={chatId} receiverPhotoURL={photoURL} />
                        <div className=''>
                            <Input />
                        </div>
                    </>
                    :
                    <>
                        <div className='flex pt-8 items-center h-full flex-col gap-10 w-1/2 m-auto text-center'>
                            <img src={whatsappImage} className="w-1/2" />
                            <h1 className='font-semi-bold text-4xl'>Start using WhatsApp Web!</h1>
                            <p className='text-gray-500'>By clicking on the "Community" logo on the navigation bar, you can find users to chat with!</p>
                        </div>
                    </>
            }


        </div>
    )
}

export default Chatbox