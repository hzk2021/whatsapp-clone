import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../../../../config/firebase';
import Message from './Message'

interface conversationProps {
    chatId: string
}

function Conversation({ chatId }: conversationProps) {

    const [messages, setMessages] = useState();

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "chats", chatId), doc => {
            console.log(doc.data())
        });

        return () => {
            unsub();
        }
    }, [chatId])

    return (
        <div className='conversation overflow-y-scroll grow p-4 m-4 flex flex-col gap-3'>
            <Message owner={false} />
            <Message owner={true} />
            <Message owner={true} />
            <Message owner={true} />
            <Message owner={false} />
            <Message owner={true} />
            <Message owner={false} />
            <Message owner={true} />
            <Message owner={true} />

        </div>
    )
}

export default Conversation