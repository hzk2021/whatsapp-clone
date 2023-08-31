import { doc, onSnapshot, Timestamp } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react'
import { db } from '../../../../config/firebase';
import { AuthContext } from '../../../../contexts/AuthContext';
import Message from './Message'

interface conversationProps {
    chatId: string,
    receiverPhotoURL: string
}

interface messageTypeProps {
    date: Timestamp,
    id: string,
    senderId: string,
    text: string
}

function Conversation({ chatId, receiverPhotoURL }: conversationProps) {

    const currentUser = useContext(AuthContext);
    const [messages, setMessages] = useState<messageTypeProps[] | null>(null);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "chats", chatId), doc => {
            const res = Object.entries(doc.data() as object);

            const tempArray: messageTypeProps[] = [];

            // @ts-expect-error : type of any
            res[0][1].forEach(m => {

                tempArray.push({
                    date: m.date,
                    id: m.id,
                    senderId: m.senderId,
                    text: m.text
                })
            })
            setMessages(tempArray)
        });


        return () => {
            unsub();
        }
    }, [chatId])

    return (
        <div className='conversation overflow-y-scroll grow p-4 m-4 flex flex-col gap-3'>

            {
                messages?.map(m => {
                    return <Message owner={currentUser!.uid === m.senderId}
                        key={m.id}
                        date={m.date}
                        id={m.id}
                        senderId={m.senderId}
                        text={m.text}
                        photoURL={currentUser!.uid === m.senderId ? currentUser!.photoURL : receiverPhotoURL} />
                })
            }

        </div>
    )
}

export default Conversation