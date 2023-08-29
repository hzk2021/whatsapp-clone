import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore";
import { useContext, useRef } from "react"
import { db } from "../../../../config/firebase";
import { AuthContext } from "../../../../contexts/AuthContext";
import { ChatContext } from "../../../../contexts/ChatContext"
import { v4 as uuidv4 } from 'uuid';

uuidv4();

function Input() {

    const textInput = useRef<HTMLInputElement>(null);
    const currentUser = useContext(AuthContext);
    const chatContext = useContext(ChatContext);


    async function handleSend() {

        await updateDoc(doc(db, "chats", chatContext!.data.chatId), {
            messages: arrayUnion({
                id: uuidv4(),
                text: textInput.current?.value,
                senderId: currentUser?.uid,
                date: Timestamp.now()

            })
        })

        await updateDoc(doc(db, "userChats", currentUser!.uid), {
            [chatContext!.data.chatId + ".latestMessage"]: {
                text: textInput.current?.value
            },
            [chatContext!.data.chatId + ".date"]: serverTimestamp()
        })

        await updateDoc(doc(db, "userChats", chatContext!.data.userInfo!.uid), {
            [chatContext!.data.chatId + ".latestMessage"]: {
                text: textInput.current?.value
            },
            [chatContext!.data.chatId + ".date"]: serverTimestamp()
        })

        textInput.current!.value = ''
    }

    return (
        <div className='input flex justify-between items-center gap-3 w-full p-3'>
            <input type='text' placeholder='Type something...' className='w-full h-10 p-2' ref={textInput}></input>
            <div className='send flex items-center gap-3'>
                <button className='rounded p-3 border bg-[#FFE5E5]' onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default Input