import { useContext, useEffect, useState } from 'react'
import ActiveChatTab from './ActiveChatTab'
import { doc, onSnapshot, Timestamp } from 'firebase/firestore'
import { db } from '../../../config/firebase';
import { AuthContext } from '../../../contexts/AuthContext';
import { ChatContext } from '../../../contexts/ChatContext';


interface chatMappingInterface {
    chatID: string,
    date: Timestamp,
    userInfo: {
        displayName: string,
        photoURL: string,
        uid: string
    },
    latestMessage: {
        text: string
    }
}

function ActiveChats() {

    const currentUser = useContext(AuthContext);
    const [chats, setChats] = useState<chatMappingInterface[]>([]);

    const chatContext = useContext(ChatContext);

    useEffect(() => {

        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser!.uid), (doc) => {

                const data = doc.data() as object
                const array = Object.entries(data);

                const chatMapping: chatMappingInterface[] = [];

                array.forEach((chat) => {

                    chatMapping.push({
                        chatID: chat[0],
                        date: chat[1].date,
                        userInfo: {
                            displayName: chat[1].userInfo.displayName,
                            photoURL: chat[1].userInfo.photoURL,
                            uid: chat[1].userInfo.uid
                        },
                        latestMessage: {
                            text: chat[1].latestMessage?.text || ''
                        }
                    })
                });

                setChats(chatMapping);

            });

            return () => {
                unsub();
            }
        }

        currentUser && getChats()
    }, [currentUser]);

    function handleSelect(chat: chatMappingInterface) {
        chatContext!.dispatch({
            type: 'CHANGE_USER',
            payload: chat.userInfo
        })
    }

    return (
        <div className='overflow-y-scroll flex flex-col'>
            {

                chats.sort((a, b) => {
                    return a.date && b.date ? b.date.toMillis() - a.date.toMillis() : 0
                }
                ).map((chat) => {
                    return <ActiveChatTab key={chat.chatID}
                        photoURL={chat.userInfo.photoURL}
                        displayName={chat.userInfo.displayName}
                        latestMessage={chat.latestMessage.text || ''}
                        onClick={() => handleSelect(chat)} />
                })
            }
        </div>
    )
}

export default ActiveChats